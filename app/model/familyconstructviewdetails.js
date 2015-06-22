Ext.define('MVF.model.familyconstructviewdetails', {
    extend: 'Ext.data.Model',
    
    config: {
	fields:[
            {name:"name", type:"string"},
            {name:"category", type:"string"},
            {name:"mrn", type:"string"},
            {name:"details", type:"string"}
            
        ]
    }
});