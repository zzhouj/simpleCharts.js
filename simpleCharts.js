(function (window) {
    var simpleCharts, calcYAxisRange, drawSimpleCharts;

    simpleCharts = function (options) {
        options = options || {};
        var canvas = document.getElementById(options.id);
        if (canvas == null || canvas.getContext == null) {
            return;
        }

        // default values
        options.fontSize = options.fontSize || 14;
        options.series = options.series || {};
        options.series.data = options.series.data || [];
        options.series.color = options.series.color || '#808080';
        options.xAxis = options.xAxis || {};
        options.xAxis.categories = options.xAxis.categories || [];
        options.xAxis.color = options.xAxis.color || '#808080';
        options.yAxis = options.yAxis || {};
        options.yAxis.color = options.yAxis.color || '#808080';
        options.yAxis.lineColor = options.yAxis.lineColor || '#808080';
        options.yAxis.step = options.yAxis.step || 5;

        // canvas
        options.width = canvas.width;
        options.height = canvas.height;
        options.context = canvas.getContext('2d');

        calcYAxisRange(options);

        drawSimpleCharts(options);
    };

    calcYAxisRange = function (options) {
        var data = options.series.data;
        if (data.length <= 0) {
            options.yAxis.range = [100, 0];
        } else {
            var min = data[0];
            var max = data[0];
            for (var i = 1; i < data.length; i++) {
                if (min > data[i]) {
                    min = data[i];
                }
                if (max < data[i]) {
                    max = data[i];
                }
            }
            var step = options.yAxis.step;
            while ((options.height / ((max - min) / step + 3)) < options.fontSize) {
                options.yAxis.step = step *= 2;
            }
            min = Math.floor(min / step) * step;
            options.yAxis.range = [];
            for (; min <= max; min += step) {
                options.yAxis.range.unshift(min);
            }
        }
    };

    drawSimpleCharts = function (options) {
        var width = options.width;
        var height = options.height;
        var ctx = options.context;

        var fontSize = options.fontSize;
        var series = options.series;
        var xAxis = options.xAxis;
        var yAxis = options.yAxis;

        var lineCount = yAxis.range.length + 2;
        var lineHeight = Math.floor(height / lineCount);

        ctx.save();
        ctx.clearRect(0, 0, width, height);

        ctx.font = '' + fontSize + 'px arial';
        ctx.textBaseline = 'middle';
        var maxLabelWidth = ctx.measureText('ww' + yAxis.range[0]).width;

        // yAxis
        for (var i = 0; i < lineCount; i++) {
            var middle = Math.floor((i + 0.5) * lineHeight) + 0.5;
            if (i == 0) {
                if (yAxis.title) {
                    ctx.fillStyle = yAxis.color;
                    ctx.textAlign = 'left';
                    ctx.fillText(yAxis.title, fontSize / 4, middle);
                }
            } else if (i <= yAxis.range.length) {
                // label
                ctx.fillStyle = yAxis.color;
                ctx.textAlign = 'center';
                ctx.fillText(yAxis.range[i - 1], maxLabelWidth / 2, middle);
                // plot line
                ctx.beginPath();
                ctx.moveTo(maxLabelWidth, middle);
                ctx.lineTo(width - maxLabelWidth, middle);
                ctx.strokeStyle = yAxis.lineColor;
                ctx.stroke();
            }
        }

        // xAxis
        var data = series.data;
        if (data.length > 0) {
            var colWidth = (width - maxLabelWidth * 2) / data.length;
            var lastMiddle = Math.floor((lineCount - 0.5) * lineHeight) + 0.5;
            for (var i = 0; i < data.length; i++) {
                var center = Math.floor(maxLabelWidth + (i + 0.5) * colWidth) + 0.5;
                var middle = Math.floor((1.5 + (yAxis.range[0] - data[i]) / yAxis.step) * lineHeight) + 0.5;
                // line
                if (i > 0) {
                    ctx.lineTo(center, middle);
                    ctx.strokeStyle = series.color;
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                }
                // dot
                ctx.beginPath();
                ctx.arc(center, middle, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = series.color;
                ctx.fill();
                // value
                ctx.fillStyle = series.color;
                ctx.textBaseline = 'bottom';
                ctx.textAlign = 'center';
                ctx.fillText('' + data[i] + (series.suffix ? series.suffix : ''), center, middle - fontSize / 2);
                // categories
                ctx.fillStyle = xAxis.color;
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                ctx.fillText(xAxis.categories[i] ? xAxis.categories[i] : '', center, lastMiddle);
                // line
                ctx.beginPath();
                ctx.moveTo(center, middle);
            }
        }

        ctx.restore();
    };

    window.simpleCharts = simpleCharts;

})(this);