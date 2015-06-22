/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define("MVF.store.piedemo", {
    extend: "Ext.data.Store",
    config:{
        model:'MVF.model.piedemo',
        data:[
                     { 'name': 'Blood', 'yearsOfExp': 12 },
                    { 'name': 'TPN', 'yearsOfExp': 7 },
                    { 'name': 'IV', 'yearsOfExp': 16 },
                    { 'name': 'Lipids', 'yearsOfExp': 21 },
                    { 'name': 'PO', 'yearsOfExp': 13 },
                    { 'name': 'Others', 'yearsOfExp': 13 }
        ]
            
        
    }
});
