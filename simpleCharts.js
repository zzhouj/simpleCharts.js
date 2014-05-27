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
        options.ctx = canvas.getContext('2d');

        calcYAxisRange(options);

        drawSimpleCharts(options);
    };

    calcYAxisRange = function (options) {
        var data = options.series.data;
        if (data.length <= 0) {
            options.yAxis.range = [0, 100];
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
                step *= 2;
            }
            min = Math.floor(min / step) * step;
            options.yAxis.range = [];
            for (; min <= max; min += step) {
                options.yAxis.range.push(min);
            }
        }
    };

    drawSimpleCharts = function (options) {
        // TODO
    };

    window.simpleCharts = simpleCharts;

})(this);