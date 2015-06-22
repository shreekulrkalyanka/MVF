Ext.define('MVF.model.carenotespatiendetails', {
    extend: 'Ext.data.Model',
    
    config: {
	fields:[
            {name:"subject", type:"string"},
            {name:"name", type:"string"},
            {name:"category", type:"string"},
            {name:"tags", type:"string"}
        ]
    }
});