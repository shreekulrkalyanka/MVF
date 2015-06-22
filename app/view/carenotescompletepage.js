Ext.define('MVF.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    config: {
        items:[
            {
                xtype:'panel',
                width:'100%',
                height:'100%',
                style:{
                    'background-color': '#FFFFFF'
                },
                items:[
                   {
			    		xtype: 'panel',
			    		itemId: 'infoBar',
			    		width: '100%',
			    		height: '70px',
			    		style: {
			    			'background-color': '#DFD9CF'
			    		},
			    		items: [{
			    			xtype: 'panel',
			    			width: '95%',
			    			height: '65px',
				    		layout: 'hbox',
				    		margin: 'auto',
				    		padding: '15px 0',
			    			items:[
			    				{
					    			xtype: 'panel',
					    			html: '<div style="overflow: hidden; height:45px;width:45px;border-radius:50%; background-color: gray; position:relative; float:left; margin-right:5px;"><img style="max-width:100%" src="resources/patient_images/Sandra.png" alt=""/></div><p style="font-size: 20px; margin-top: -5px;">MAVERICK, SANDRA</p> Allergies: No Known Allergies',
					    			flex: 1.1,
					    			style:{
					    				'font-size': '14px'
					    			}
				    			},
					    		{
					    			xtype: 'panel',
					    			html: '<b>MRN: 0011200</b> <br/> Inpatient FIN: 3019558',
					    			flex: 0.65,
					    			padding: '0 0 0 10px',
					    			style: {
					    				'border-left' : '1px solid',
					    				'font-size': '14px',
					    				'padding': '20px'
					    			}
					    		},
					    		{
					    			xtype: 'panel',
					    			html: 'Admit Dt: 07/30/2014 5:00 <br/>Discharge Dt: <No - Discharge Date>',
					    			flex: 1,
					    			padding: '0 0 0 10px',
					    			style: {
					    				'border-left' : '1px solid',
										'font-size': '14px'
					    			}
					    		},
					    		{
					    			xtype: 'panel',
					    			html: 'Location: EULH Neur/Ped B; 415 <br/>PCP: CASPER, RANDALL J',
					    			padding: '0 0 0 10px',
					    			flex: 1,
					    			style: {
					    				'border-left' : '1px solid',
					    				'font-size': '14px'
					    			}
					    		}
			    			]
			    		}]

	    			},
                    {
                      xtype:'container',
                      layout:'hbox',
                      
                      items:[
                         
                                {
                                    xtype:'label',
                                    html:'Care Notes',
                                    style:{
                                        'margin-top': '2%',
                                        'margin-left': '4%',
                                        'color': 'rgb(120, 96, 132)',
                                        'font-size': '30px',
                                        'fontFamily':'openSans'
                                    }
                                },

                                 {
                                        xtype: 'selectfield',
                                        width:'200px',
                                        border:'1 1 1 1',
                                        itemid:'shiftname',
                                        id:'shiftname',
                                        options: [
                                            {text: 'Care Notes',  value: 'notes1'}                                            
                                        ],

                                        style:{
                                            'margin-left':'41%',
                                            'margin-top':'2%'


                                        }
                                 },
                                 {
                                    xtype:'button',
                                    text:'PATIENT SUMMARY',
                                    itemid:'patientsummary',
                                    width:'170px',
                                    height:'30px',
                                    style:{
                                       'margin-left':'46px',
                                       'margin-top':'2%',
                                       'font-size':'12px'
                                    }

                            }
                      ]
            },
                    {   
                        xtype:'container',
                        items:[
                        {
                            xtype: 'container',
                            width: '300px',
                            height: '600px',
                            layout:'vbox',
                            style: {
                                'border': '1px #9E9D8B solid',
                                'borderRightColor':'#9E9D8B',
                                'borderTopColor': '#AC9C65',
                                'borderTopWidth': '4px',
                                'margin': 'auto',
                                'margin-left': '4%',
                                'margin-top': '',
                                'background-color': '#FFFFFF'
                             },
                             
                             items:[
                                 
                                 {
                            xtype: 'container',
                            width: '280px',
                            height: '60px',
                            layout:'hbox',
                            style: {
                                
                                'margin-left': '1%',
                                'margin-top': '3%',
                                'background-color': '#FFFFFF'
                             },
                             items:[
                                 {
                                    xtype:'label',
                                    html:'Notes Feed',
                                    style:{
                                        'margin-top': '2%',
                                        'margin-left': '4%',
                                        'color': 'rgb(120, 96, 132)',
                                        'font-size': '25px',
                                        'fontFamily':'openSans'
                                    }
                                },
                            {
                                    xtype:'button',
                                    text:'FILTERS',
                                    itemid:'filters',
                                    width:'90px',
                                    height:'30px',
                                    style:{
                                       'margin-left':'23%',
                                       'margin-top':'2%',
                                       'font-size':'15px'
                                    }

                            }
                            ]
                             
                        },
                        //Vertical Container for Scrollable Components   
                        {
                            xtype: 'container',
                            width: '99.5%',
                            height: '87%',
                            layout:'vbox',
                            
                              items:[
                                  {
                                     xtype:'details',
                                     
                                     width:'295px',
                                     height:'500px',
                                    
                                  }
                                  
                                  
                              ],
                              
                              
                         
                        }
                        ]
                             
                        },
                        //Upper rectangular panel for the page
                        {
                            xtype: 'container',
                            width: '650px',
                            height: '492px',
                            layout:'vbox',
                            style: {
                                'border': '1px #9E9D8B solid',
                                'borderTopColor': '#AC9C65',
                                'borderTopWidth': '4px',
                                'margin': 'auto',
                                'margin-left': '35%',
                                'margin-top': '-600px',
                                'background-color': '#FFFFFF',
                                'position': 'relative'
                            },
                            items:[
                                
                        {
                            xtype: 'container',
                            width: '100%',
                            height: '12%',
                            layout:'hbox',
                            style: {
                               'border': '1px #9E9D8B solid',
                                'borderRightColor':'#9E9D8B',
                                'borderTopWidth': '1px',
                                'margin': 'auto',
                                'background-color': '#4D3462',
                                'float': 'left',
                                
                                
                            },
                            items:[
                             {
                                    xtype:'selectfield',
                                    border:'1 1 1 1',
                                        itemid:'opensans',
                                        id:'opensans',
                                        options: [
                                            {text: 'Open Sans',  value: 'opensans'}                                            
                                        ],
                                    style:{
                                       'margin-left':'2%',
                                       'margin-top':'1%',
                                       'font-size':'16px',
                                       'width': '230px',
                                       'height': '5px',
                                    }

                            },
                            {
                                    xtype:'selectfield',
                                    border:'1 1 1 1',
                                        itemid:'fontsize',
                                        id:'fontsize',
                                        
                                        options: [
                                            {text: '12 pt',  value: 'pt12'}                                            
                                        ],
                                    style:{
                                       'margin-left':'2%',
                                       'margin-top':'1%',
                                       'font-size':'16px',
                                       'width': '90px',
                                       'height': '5px',
                                    }

                            },
                            {
                                    xtype:'button',
                                    text:'B',
                                    itemid:'bold',
                                    width:'6%',
                                    height:'30%',
                                    style:{
                                       'margin-left':'1%',
                                       'margin-top':'1%',
                                       'font-size':'15px'
                                    }

                            },
                            {
                                    xtype:'button',
                                    text:'I',
                                    itemid:'italic',
                                    width:'6%',
                                    height:'30%',
                                    style:{
                                       'margin-left':'1%',
                                       'margin-top':'1%',
                                       'font-size':'15px'
                                    }

                            },
                            {
                                    xtype:'button',
                                    text:'U',
                                    itemid:'underline',
                                    width:'6%',
                                    height:'30%',
                                    style:{
                                       'margin-left':'1%',
                                       'margin-top':'1%',
                                       'font-size':'15px'
                                    }

                            },
                            {
                                    xtype:'button',
                                    text:'=',
                                    itemid:'bullets',
                                    width:'6%',
                                    height:'30%',
                                    style:{
                                       'margin-left':'1%',
                                       'margin-top':'1%',
                                       'font-size':'15px'
                                    }

                            }
                            ,
                            {
                                    xtype:'button',
                                    text:'123',
                                    itemid:'numbers',
                                    width:'6%',
                                    height:'30%',
                                    style:{
                                       'margin-left':'1%',
                                       'margin-top':'1%',
                                       'font-size':'15px'
                                    }

                            },
                            {
                                    xtype:'button',
                                    text:'123',
                                    itemid:'square',
                                    width:'6%',
                                    height:'30%',
                                    style:{
                                       'margin-left':'1%',
                                       'margin-top':'1%',
                                       'font-size':'15px'
                                    }

                            }
                            ]
                        },
                        {
                            xtype: 'container',
                            width: '100%',
                            height: '110%',
                            layout:'vbox',
                            style: {
                               'border': '1px #9E9D8B solid',
                                'borderRightColor':'#9E9D8B',
                                'borderTopWidth': '1px',
                                'margin': 'auto',
                                'background-color': '#FFFFFF',
                                'float': 'left',
                                
                            },
                            items:[
                                {
                            xtype: 'container',
                            width: '100%',
                            height: '6%',
                            layout: 'hbox', 
                        items:[{
                                    xtype:'selectfield',
                                    border:'1 1 1 1',
                                        itemid:'itemgg',
                                        id:'itemgg',
                                        
                                        options: [
                                            {text: 'select',  value: 'select'}                                            
                                        ],
                                    style:{
                                       'margin-left':'2%',
                                       'font-size':'12px',
                                       'width': '90px',
                                       'height': '5px',
                                    }

                            },
                            {
                                    html:'(New Subject) - 00/00/00',
                                    style:{
                                        
                                        'font-size':'25px'
                                    }

                            }
]},
                               
                            {
                                        xtype: 'textareafield',
                                        width:'640px',
                                        height:'420px',
                                        value:'Type Note Here...',
                                        border:'1 1 1 1',
                                        itemid:'typenote',
                                        id:'typenote',
                                        
                                        style:{
                                            'margin-top':'3%',
                                            }
                                 },
                                 {html:'<hr>'},
                                 {
                            xtype: 'container',
                            width: '100%',
                            height: '6%',
                            layout: 'hbox', 
                            
                        items:[{
                                    xtype:'selectfield',
                                    border:'1 1 1 1',
                                        itemid:'recipient',
                                        id:'recipient',
                                        options: [
                                            {text: 'RECIPIENT',  value: 'SELECT'}                                            
                                        ],
                                    style:{
                                       'margin-left':'2%',
                                       'font-size':'12px',
                                       'width': '80px',
                                       height:'3px',
                                    }

                            },
                           {
                                    xtype:'button',
                                    text:'SEND',
                                    itemid:'send',
                                    width:'80px',
                                    height:'30px',
                                    style:{
                                       'margin-left':'70%',
                                       'font-size':'12px'
                                    }
                                }
]}
                                 
                                 
                                 
                               
                            ]
                        }
                            ]
                            
                        }
                        ]
                    }


                ]
            }
        ]
    }
});
