Ext.define("MVF.store.familyconstructviewdetails", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.familyconstructviewdetails',
	    storeId : 'FamilyConstructViewDetails',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/familyconstructsviewdashboard.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});