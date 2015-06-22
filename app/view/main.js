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
                      width: '96%',
                      height: '60px',
                      style: {
			    			'background-color': '#DFD9CF',
                                                'margin-top':'2%',
                                                'margin-left':'2%'
                                                
                        },
                      items:[
                         
                                {
                                    xtype:'label',
                                    html:'Add Note to Timeline',
                                    style:{
                                        'margin-top': '1%',
                                        'margin-left': '2%',
                                        'color': 'rgb(120, 96, 132)',
                                        'font-size': '30px',
                                        'fontFamily':'openSans'
                                    }
                                },

                                 
                                 {
                                    xtype:'button',
                                    text:'X',
                                    itemid:'closebutton',
                                    width:'48px',
                                    height:'48px',
                                    style:{
                                       'margin-left':'65.8%',
                                       'margin-top':'0.5%',
                                       'font-size':'25px'
                                    }

                            }
                      ]
            },
                    {   
                        xtype:'container',
                        style:{
                                       'margin-top':'3%',
                        },
                        items:[
                        
                        //Left rectangular panel for the page
                        {
                            xtype: 'container',
                            width: '640px',
                            height: '492px',
                            layout:'vbox',
                            style: {
                                'border': '1px #9E9D8B solid',
                                'borderTopColor': '#AC9C65',
                                'borderTopWidth': '4px',
                                'margin': 'auto',
                                'margin-left':'6%',
                                'margin-top': '0px',
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
                            height: '94%',
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
                                        xtype: 'textareafield',
                                        width:'600px',
                                        height:'390px',
                                        value:'Type Note Here...',
                                        border:'1 1 1 1',
                                        itemid:'typenote',
                                        id:'typenote',
                                        
                                        style:{
                                            'margin-top':'3%',
                                            'border': '1px #9E9D8B solid',
                                            'margin-left':'3%',
                                            }
                                },
                                
                                 {
                            xtype: 'container',
                            width: '100%',
                            height: '6%',
                            layout: 'hbox', 
                            
                        items:[
                            {
                                    xtype:'label',
                                    html:'Add category and tags',
                                    style:{
                                        'margin-top': '2%',
                                        'margin-left': '4%',
                                        'color': 'rgb(120, 96, 132)',
                                        'font-size': '12px',
                                        
                                    }
                                }
]}
                                 
                            ]
                        }
                            ]
                            
                        },
                        //Right Square Panel for page
                        {
                            xtype: 'container',
                            width: '23%',
                            height: '230px',
                            layout:'vbox',
                            style: {
                                'border': '1px #9E9D8B solid',
                                'margin-left':'69.5%',
                                'margin-top':'-48.2%',
                            },
                            items:[
                                {
                            xtype: 'container',
                            width: '86%',
                            height: '30px',
                            layout:'hbox',
                            html:'Family Constructs:',
                            style: {
                                'margin-top':'10%',
                                'margin-left':'7%',
                            }
                        },
                        {
                            xtype: 'container',
                            width: '86%',
                            height: '30px',
                            layout:'hbox',
                            html:'<input id="family_constructs" type="text" style="width:99.9%"/>',
                            style: {
                                'margin-left':'7%',
                            }
                        },
                        {
                            xtype: 'container',
                            width: '86%',
                            height: '30px',
                            layout:'hbox',
                            html:'Date of Event:',
                            style: {
                                'margin-top':'2%',
                                'margin-left':'7%',
                            }
                        },
                        {
                            xtype: 'container',
                            width: '86%',
                            height: '30px',
                            layout:'hbox',
                            html:'<input id="date_of_event" type="text" style="width:99.9%"/>',
                            style: {
                                'margin-left':'7%',
                            }
                        },
                        {
                            xtype: 'container',
                            width: '86%',
                            height: '30px',
                            layout:'hbox',
                            html:'Event:',
                            style: {
                                'margin-top':'2%',
                                'margin-left':'7%',
                            }
                        },
                        {
                            xtype: 'container',
                            width: '86%',
                            height: '30px',
                            layout:'hbox',
                            html:'<input id="event" type="text" style="width:99.9%"/>',
                            style: {
                                'margin-left':'7%',
                            }
                        }
                            ]
                            
                        },
                        {
                            xtype: 'container',
                            width: '65px',
                            height: '30px',
                            layout:'vbox',
                            style: {
                                
                                'margin-left':'86%',
                                'margin-top':'25%',
                            },
                            items:[
                                {
                                    xtype:'button',
                                    text:'SAVE',
                                    itemid:'savebutton',
                                    style:{
                                       'width':'100%',
                                       'height':'100%',
                                       'font-size':'10px'
                                    }

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
