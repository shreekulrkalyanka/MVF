Ext.define('MVF.view.addnotetopatientcareplanhistorylist', {
    extend: 'Ext.dataview.List',
    xtype: 'addnote', 
    config: {
	title: 'Schedule',
	store: 'AadNotetoPatientCarePlanHistory',
        itemTpl: '<div style="width:295px; height:90px; list-style-type: none; margin-left: 0%; text-align:justify;"><div style="float:left; width:84%; height:100%; "><b>Subject: {name}</b></div></div>',
        styleHtmlContent: false,
	mode: 'SINGLE',
	disableSelection: true,
	scrollable: true,
	margin: 0,
        height:20,
        padding: 0,
    },
    
});