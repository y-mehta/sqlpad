var $ = require('jquery');
var dimple = require('dimple');

module.exports =  {
    fields: {
        x: {
            label: "x Axis",
            inputType: "field-dropdown",
            required: true,
            $input: null,
            val: null,
            datatype: null,
            min: null,
            max: null
        },
        y: { 
            label: "y Axis",
            inputType: "field-dropdown",
            required: true
        },
        size: {
            label: "Size",
            inputType: "field-dropdown",
            required: false
        },
        label: {
            label: "Bubble Label",
            inputType: "field-dropdown",
            required: false
        }
    },
    renderChart: function (meta, data, fields) {
        
        var $chart = $('#chart');
        var width = $chart.width();
        var height = $chart.height();
        var svg = dimple.newSvg("#chart", width, height);
        var myChart = new dimple.chart(svg, data);
        myChart.setBounds(60, 30, width - 100, height - 90);
        
        
        myChart.addMeasureAxis("x", fields.x.val);
        myChart.addMeasureAxis("y", fields.y.val);
        if (fields.size.val) myChart.addMeasureAxis("z", fields.size.val); // bubble size
        // to get label we could do fields.label.val
        myChart.addSeries([fields.label.val, "bubble color"], dimple.plot.bubble); // TODO: null defines color groupings
        
        myChart.draw();
        return myChart;
        
    }
};