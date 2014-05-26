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

        options.width = canvas.width;
        options.height = canvas.height;
        options.ctx = canvas.getContext('2d');

        calcYAxisRange(options);

        drawSimpleCharts(options);
    };

    calcYAxisRange = function (options) {
        // TODO
    };

    drawSimpleCharts = function (options) {
        // TODO
    };

    window.simpleCharts = simpleCharts;

})(this);