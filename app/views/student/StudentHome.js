UPSApp.views.StudentHome = Ext.extend(Ext.Panel, {
	id:'studenthome',
	layout:'card',
	items:[	],
	initComponent: function() {
		var header = {
				xtype:'panel',
				html:'<span>Student Home</span>',
				height:25
		};
		
		var elements = [
		               {xtype:'button',text:'Student Info',handler:function(){Ext.dispatch({controller: 'Student',action:'info'});}},
		               {xtype:'button',text:'News', handler:function(){
		                       Ext.dispatch({controller:'Student', action:'news'});
		               }},
		               {xtype:'button',text:'Events'},
		               {xtype:'button',text:'Hey You!', handler:function(){
                               Ext.dispatch({controller:'Student', action:'heyyousubmission'});
                       }},
		               {xtype:'button',text:'Ticket To Tacoma', handler:function(){
                               Ext.dispatch({controller:'Student', action:'tickettotacoma'});
                       }}
		];
			
		var idx = 0; var hboxes = [header];
		for(var i = 1; i <=  Math.ceil(elements.length / 2); i++)
		{
			var temp = []
			temp[0] = elements[idx++];
			
			if(elements[idx])
				temp[1] = elements[idx++];
			hboxes[i] = {
				flex:1,
				xtype:'container',
				layout:{type:'hbox',align:'stretch',pack:'stretch',},
				defaults:{flex:1,marginBottom:'1%'},
				items:temp
			}
		}
		

		var vbox = {
			xtype: 'container',
			layout: {
				type: 'vbox',
				align: 'stretch',
				pack: 'stretch',
			},
			items:hboxes
		}
		
		Ext.apply(this, {items:vbox});
		
		UPSApp.views.StudentInfo.superclass.initComponent.apply(this, arguments);
	}
});