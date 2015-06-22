Ext.define('MVF.view.familyconstructviewlist', {
    extend: 'Ext.dataview.List',
    xtype: 'familydetails', 
    config: {
	title: 'Schedule',
	store: 'FamilyConstructViewDetails',
        itemTpl: '<div style="width:99%; height:90px; list-style-type: none; margin-left: -1%; text-align:justify;"><div style="float:left; width:20%; height:100%; "><img style="max-width:60%; margin-left:1%" src="resources/patient_images/Sandra.png" alt=""/></div><div style="float:left; width:30%; height:100%; "><b>{name}</b></br>{category}</br>MRN: {mrn}</div><div style="float:left; width:45%; height:100%; "><b>Family Constructs</b></br>{details}</div><div style="float:left; height:100%; "><img style=" max-height:99%; " src="resources/startup/image3.png" alt=""/></div></div>',
        styleHtmlContent: false,
	mode: 'SINGLE',
	disableSelection: true,
	scrollable: true,
	margin: 0,
        height:20,
        padding: 0,
    },
    
});
