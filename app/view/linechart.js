/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define("MVF.view.linechart", {
    extend: "Ext.chart.CartesianChart",
    requires: [
        "Ext.TitleBar",
        "Ext.chart.CartesianChart",
        "Ext.chart.series.Line",
        "Ext.chart.axis.Numeric",
        "Ext.chart.axis.Category",
        "Ext.draw.sprite.Circle"
    ],
    alias: "widget.linechart",
    config: {
        flex: 1,
        xtype: "chart",
        store: "LineChart",
        cls: "chart",
        innerPadding: 14,
        
        animate: true,
        series: [
            {
                type: "line",
                xField: "time",
                yField: "vital",
                title: "Vital chart",
                style: {
                    stroke: "#DFD9CF",
                    lineWidth: 1.5
                },
               
                marker: {
                    type: "circle",
                    stroke: "#AC9C65",
                    radius: 3,
                    lineWidth: 2
                }
            }
            
            
            
        ], 
        interaction:[{
                type:'panzoom',
                zoomOnPanGesture:true
        }],
        axes: [
            {
                type: "numeric",
                //mininum:'40',
                position: "left",
                title: {
                    fontSize: 15
                   // text: "vital"   Y axis 
                },
                style:{
                    stroke:"#98918f"
                },
                grid: {
                    stroke: "#CCC",
                    even: {
                        fill: "#fff"
                    },
                    odd:{
                        fill:'#fff'
                    }
                }
            },
            {
                type: "category",
                position: "bottom",
                style:{
                    stroke:"#98918f"
                }
                
            }
        ]
    }
});
