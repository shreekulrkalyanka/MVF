Ext.define('MVF.view.carenotespatientlist', {
    extend: 'Ext.dataview.List',
    xtype: 'details', 
    config: {
	title: 'Schedule',
	store: 'patientdetails',
        itemTpl: '<div style="width:295px; height:90px; list-style-type: none; margin-left: 0%; text-align:justify;"><div style="float:left; width:15%; height:100%; "><img style="max-width:30px; margin-left:1%" src="resources/startup/image2.png" alt=""/></div><div style="float:left; width:84%; height:100%; "><b>Subject: </b>{subject}</br><b>Name: </b>{name}</br><b>Categpru: </b>{category}</br><b>Tags: </b>{tags}</div></div>',
        styleHtmlContent: false,
	mode: 'SINGLE',
	disableSelection: true,
	scrollable: true,
	margin: 0,
        height:20,
        padding: 0,
    },
    
});