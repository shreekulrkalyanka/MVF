/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define("MVF.controller.Main", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
           // mainView:"main",
            vital:'[itemid=vitalname]',
            backtodashboard:'[itemid=BackToDashboard]'
        },
        control: {
//            mainView: {
//                refreshRequestCmd: "onRefreshRequestCmd"
//                
//            },
            vital:{
                    change:'OnVitalnameSelect'
                },
            backtodashboard:{
                tap:'backtodashboardbutton'
            }    
        }
    },
//    onRefreshRequestCmd: function (view) {
//        Ext.getStore("HrsAndValueByYear").load();
//        console.log("load");
//    },
    OnVitalnameSelect: function(){
            var store=Ext.getStore('LineChart');
            var storebp=Ext.getStore('bpLineChart');
            var vitalvalue=Ext.ComponentQuery.query('#vitalname')[0].getValue();
           // Ext.Msg.alert(vitalvalue);
           if(vitalvalue==='bp'){
               storebp.load({
                   params:{ vitalvalue: vitalvalue},
                   scope:this,
                   callback:function(records){
                    var vitals=records;
                    var vitalvalues=vitals[0].data.vitalnum;
                    var timevalue=vitals[0].data.time;
                    var denos=vitals[0].data.vitaldeno;
                    console.log(vitalvalues);
                    console.log(timevalue);
                    console.log(denos);
                }
               });
               Ext.ComponentQuery.query('#linechartid')[0].hide();
               Ext.ComponentQuery.query('#bplinechartid')[0].show();
               
           } 
           else{
           console.log(vitalvalue);
            store.load({
                params:{ vitalvalue: vitalvalue},
                scope:this,
                callback:function(records){
                    var vitals=records;
                    var vitalvalues=vitals[0].data.vital;
                    var timevalue=vitals[0].data.time;
                    var denos=vitals[0].data.deno;
                    console.log(vitalvalues);
                    console.log(timevalue);
                    console.log(denos);
                    //Ext.Msg.alert(vitalvalues);
                }
            });
            Ext.ComponentQuery.query('#bplinechartid')[0].hide();
            Ext.ComponentQuery.query('#linechartid')[0].show();
        }
//            store.on('load',function(){
//                // Ext.Msg.alert('store is loaded');
//            })
            //Ext.ComponentQuery.query('#linechartid')[0].show();
            //Ext.Msg.alert('vitalval');
    },
    backtodashboardbutton: function(){
           Ext.Msg.alert('vitalval');
    }
});