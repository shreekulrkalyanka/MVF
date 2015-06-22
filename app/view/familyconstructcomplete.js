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
                                    html:'<img style="max-width:30px" src="resources/startup/family_constructs.png" alt=""/>Family Construct',
                                    style:{
                                        'margin-top': '2%',
                                        'margin-left': '4%',
                                        'color': 'rgb(120, 96, 132)',
                                        'font-size': '30px',
                                        'fontFamily':'openSans'
                                    }
                                },
                                {
                                    html:'<img style="max-width:30px; margin-left:75px; margin-top:27px;" src="resources/startup/i2.png" alt=""/>',
                                },
                                {
                                    html:'Page:',        
                                    style:{
                                        'margin-top': '3%',
                                        'margin-left': '26%',
                                    }
                                },
                                 {
                                
                                xtype: 'selectfield',
                                        width:'130px',
                                        border:'1 1 1 1',
                                        itemid:'page',
                                        id:'page',
                                        options: [
                                            {text: 'CURRENT',  value: 'page'}                                            
                                        ],

                                        style:{
                                            'margin-left':'1%',
                                            'margin-top':'2%'


                                        }
                                 },
                                 {
                                    xtype:'button',
                                    text:'PATIENT SUMMARY',
                                    itemid:'patientsummary',
                                    width:'160px',
                                    height:'30px',
                                    style:{
                                       'margin-left':'10px',
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
                            height: '30px',
                            layout:'hbox',
                            style: {
                                
                                'margin-left': '1%',
                                'margin-top': '3%',
                                'background-color': '#FFFFFF'
                             },
                             items:[
                                 {
                                    xtype:'label',
                                    html:'Change Constructs',
                                    style:{
                                        'margin-top': '2%',
                                        'margin-left': '4%',
                                        'color': 'rgb(120, 96, 132)',
                                        'font-size': '25px',
                                        'fontFamily':'openSans',
                                        
                                    }
                                },
                                 
                    
                            ]
                             
                        },
                        {
                            html: '<hr>',
                            style:{
                                      'margin-top': '3.2%',
                                   }
                        },
                        {
                                xtype: 'container',
                                width: '99%',
                                height: '6%',
                                html: '&nbsp;<input type="checkbox" name="add" id="add" value="add">&nbsp;&nbsp;&nbsp;<strong>Add</strong>&nbsp;&nbsp;<input type="checkbox" name="remove" id="remove" value="remove">&nbsp;&nbsp;&nbsp;<strong>Remove</strong>&nbsp;&nbsp;<input type="checkbox" name="edit" id="edit" value="edit">&nbsp;&nbsp;&nbsp;<strong>Edit</strong>',

                                 style:{
                                     'margin-top': '2%',
                                     
                                       }
                        } 
                        ,
                        {
                                xtype: 'container',
                                width: '100%',
                                height: '8%',
                                
                                    items:[
                                        {
                                        xtype: 'selectfield',
                                        width:'99%',
                                        itemid:'construct_name',
                                        id:'construct_name',
                                        options: [
                                            {text: 'Construct Name',  value: 'Construct Name'}                                            
                                        ]
                                        ,
                                    style:{
                                        'margin-top': '1%',
                                     'border': '1px #9E9D8B solid',   
                                    }
                                    }

                                    ],
                                    
                                         style:{
                                        'margin-top': '1%',
                                        
                                    }
                                        
                                    
                        } 
                        ,
                        {
                                xtype: 'container',
                                width: '100%',
                                height: '7%',
                                html:'<input type="text" value="Tag Family Members" style="width:99%; height:42px"/>',
                                 style:{
                                        'margin-top': '2%',
                                        }
                        } 
                        ,
                        {
                                xtype: 'container',
                                width: '100%',
                                height: '15%',
                                
                                html:'<textarea rows="4" cols="31">Note</textarea>',
                                 style:{
                                        'margin-top': '1%',
                                        'margin-left': '1%',
                                        }
                        },
                        {
                                    xtype:'label',
                                    html:'Actions',
                                    style:{
                                        'margin-top': '3%',
                                        'margin-left': '4%',
                                        'color': 'rgb(120, 96, 132)',
                                        'font-size': '25px',
                                        'fontFamily':'openSans',
                                        
                                    }
                        },
                        
                        //Vertical Container for Scrollable Components   
                        {
                            xtype: 'container',
                            width: '99%',
                            height: '35%',
                            layout:'vbox',
                            scrollable:{
                            direction:'vertical',
                            directionLock: true

                            },
                            style: {
                                'border': '1px #9E9D8B solid',
                                'borderRightColor':'#9E9D8B',
                                'borderTopWidth': '1px',
                                'margin': 'auto',
                                'margin-left': '1%',
                                'margin-top': '1%',
                                'background-color': '#FFFFFF'
                             },
                             
                              items:[

                                   {
                            xtype: 'container',
                            width: '96%',
                            height: '40px',
                            layout:'vbox',

                            style: {
                                'border': '1px #9E9D8B solid',
                                'borderRightColor':'#9E9D8B',
                                'borderTopWidth': '1px',
                                'margin': 'auto',
                                'margin-left': '1%',
                                'background-color': '#FFFFFF'
                             },
                             items:[
                                   {
                            xtype: 'container',
                            width: '80%',
                            height: '90%',
                            layout:'hbox',

                            style: {
                                
                                'margin': 'auto',
                                'margin-left': '1%',
                                'margin-top': '1%',
                                'background-color': '#FFFFFF'
                             },
                             items:[
                        {
                            xtype: 'container',
                            width: '80%',
                            height: '93%',
                            layout:'vbox',
                            html: '<input type="checkbox" name="discuss_treat" id="discuss_treat" value="Discuss Threat">&nbsp;&nbsp;&nbsp;<strong>Discuss Threat</strong>',
                            style: {
                                
                                'margin': 'auto',
                                'margin-left': '1%',
                                'margin-top': '1%',
                                'background-color': '#FFFFFF'
                             }
                         },
                         {
                             html: '<img style="max-height:%; margin-left:1%;" src="resources/startup/image4.png" alt=""/>'
                         }
                             ]
                         }
                              ]
                             
                        }
                        ,
                        {
                            xtype: 'container',
                            width: '96%',
                            height: '40px',
                            layout:'vbox',

                            style: {
                                'border': '1px #9E9D8B solid',
                                'borderRightColor':'#9E9D8B',
                                'borderTopWidth': '1px',
                                'margin': 'auto',
                                'margin-left': '1%',

                                'background-color': '#FFFFFF'
                             },
                             items:[
                                   {
                            xtype: 'container',
                            width: '80%',
                            height: '90%',
                            layout:'hbox',

                            style: {
                                
                                'margin': 'auto',
                                'margin-left': '1%',
                                'margin-top': '1%',
                                'background-color': '#FFFFFF'
                             },
                             items:[
                        {
                            xtype: 'container',
                            width: '80%',
                            height: '93%',
                            layout:'vbox',
                            html: '<input type="checkbox" name="provide_info" id="provide_information" value="Provide Information">&nbsp;&nbsp;&nbsp;<strong>Provide Info</strong>',
                            style: {
                                
                                'margin': 'auto',
                                'margin-left': '1%',
                                'margin-top': '1%',
                                'background-color': '#FFFFFF'
                             }
                         },
                         {
                             html: '<img style="max-height:%; margin-left:1%;" src="resources/startup/image4.png" alt=""/>'
                         }
                                  ]
                         }
                              ]
                             
                        }
                        ,
                        {
                            xtype: 'container',
                            width: '96%',
                            height: '40px',
                            layout:'vbox',

                            style: {
                                'border': '1px #9E9D8B solid',
                                'borderRightColor':'#9E9D8B',
                                'borderTopWidth': '1px',
                                'margin': 'auto',
                                'margin-left': '1%',

                                'background-color': '#FFFFFF'
                             },
                             items:[
                                   {
                            xtype: 'container',
                            width: '80%',
                            height: '90%',
                            layout:'hbox',

                            style: {
                                
                                'margin': 'auto',
                                'margin-left': '1%',
                                'margin-top': '1%',
                                'background-color': '#FFFFFF'
                             },
                             items:[
                        {
                            xtype: 'container',
                            width: '80%',
                            height: '93%',
                            layout:'vbox',
                            html: '<input type="checkbox" name="invite_questions" id="invite_questions" value="Invite Questions">&nbsp;&nbsp;&nbsp;<strong>Invite Questions</strong>',
                            style: {
                                
                                'margin': 'auto',
                                'margin-left': '1%',
                                'margin-top': '1%',
                                'background-color': '#FFFFFF'
                             }
                         },
                         {
                             html: '<img style="max-height:%; margin-left:1%;" src="resources/startup/image5.png" alt=""/>'
                         }
                                  ]
                         }
                         
                         
                              ]
                             
                        },
                        {
                             html: '<hr style="width:80%;">'
                         },
                        {
                            xtype: 'container',
                            width: '96%',
                            height: '50px',
                            layout:'vbox',

                            style: {
                                
                                'margin': 'auto',
                                'margin-left': '1%',

                                'background-color': '#FFFFFF'
                             },
                             items:[
                               {
                             html: 'Invite Family Questions and </br> repeat information as often',
                              style: {
                                'margin-left': '10%',
                            }
                             
                            }
                            
                             ]
                         }
                       
                        
                              ]
                              
                             
                        },
                        {
                                    xtype:'button',
                                    text:'SAVE',
                                    itemid:'save',
                                    width:'30%',
                                    height:'5%',
                                    style:{
                                       'margin-left':'67%',
                                       'margin-top':'2%',
                                       'font-size':'15px'
                                    }

                        }
                        ]
                             
                        },
                        //Upper rectangular panel for the page
                        {
                            xtype: 'container',
                            width: '650px',
                            height: '600px',
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
                            height: '10%',
                            layout:'hbox',
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
                                    xtype:'label',
                                    html:'Family View',
                                    style:{
                                        'margin-top': '2%',
                                        'margin-left': '4%',
                                        'color': 'rgb(120, 96, 132)',
                                        'font-size': '25px',
                                        'fontFamily':'openSans',
                                        
                                    }
                                },
                            
                            {
                                    xtype:'button',
                                    text:'Edit',
                                    itemid:'edit',
                                    width:'8%',
                                    height:'40%',
                                    style:{
                                       'margin-left':'67%',
                                       'margin-top':'2%',
                                       'font-size':'15px'
                                    }

                            }
                            
                            ]
                        }
                        ,
                        {
                            xtype: 'familydetails',
                            width:'99%',
                            height:'80%',
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
