Ext.define("MVF.view.piedemo", {
    extend: "Ext.chart.PolarChart",
    requires:[
        "Ext.chart.PolarChart",
        "Ext.chart.AbstractChart",
        "Ext.chart.series.Pie"
        
        
        
    ],
    alias:"widget.piedemo",
    config:{
        layout:'fit',
          flex: 1,
        xtype:'polar',
        store:'piedemo',
        animate:'true',
        
        innerpadding:'0',
        colors: ["#F0523F","#FFD779","#BBAF82","#72DAF1","#87B675","#FF5472"],
//        legend:{
//            position:'bottom'
//        },
        insetPadding:65,
       // interactions:['rotate'],
        highlight: {
                  segment: {
                    margin: 20
                  }
                },
                 label: {
                    field: 'name'
                    //display: 'rotate',
                    //contrast: true
                    //font: '0px Arial'
                },
        series: [
                     {
                        type: 'pie',
                        labelField: 'name',
                        xField: 'yearsOfExp',
                        donut: 50,
                        height:25
                      
                     }
                     
                    ]
        
    }
    
});

