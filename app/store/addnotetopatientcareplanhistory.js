Ext.define("MVF.store.addnotetopatientcareplanhistory", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.addnotetopatientcareplanhistory',
	    storeId : 'AadNotetoPatientCarePlanHistory',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/addnotetopatientcareplanhistorydashboard.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});