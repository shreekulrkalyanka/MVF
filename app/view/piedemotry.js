Ext.define("MVF.view.piedemotry", {
    extend: "Ext.chart.PolarChart",
    requires:[
        "Ext.chart.PolarChart",
        "Ext.chart.AbstractChart",
        "Ext.chart.series.Pie"
        
        
        
    ],
    alias:"widget.piedemotry",
    config:{
        layout:'fit',
          flex: 1,
        xtype:'polar',
        store:'piedemo',
        animate:'true',
        
        innerpadding:'10',
        colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e"],
//        legend:{
//            position:'bottom'
//        },
        insetPadding:65,
        highlight: {
                  segment: {
                    margin: 20
                  }
                },
                 label: {
                    field: 'name',
                    display: 'rotate',
                    contrast: true,
                    font: '0px Arial'
                },
                style:{
                    
                },
        series: [
                     {
                        type: 'pie',
                        labelField: 'name',
                        xField: 'yearsOfExp',
                        donut: 50
                     }
                    ]
                    
        
    }
    
});

