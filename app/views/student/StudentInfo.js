UPSApp.views.StudentInfo = Ext.extend(Ext.Panel, {
	id:'studentinfo',
	width:'100%',
	tpl:'<div class="student-info">' +
			'<p>' +
				'Hello, <b class="small">{name}</b>.' +
				'<hr />' +
				'You have <b class="large">{dinerdollars}</b> diner dollars.' +
				'<hr />' +
				'Your next payment due is <b class="medium">${paymentdue}</b> on <b class="small">January 25th</b>' +
			'</p>' +
		'</div>',
	
	items:[],
	initComponent: function() {
		
		
		UPSApp.views.StudentInfo.superclass.initComponent.apply(this, arguments);
	}
});

/*UPSApp.views.StudentInfo = Ext.extend(Ext.form.FormPanel, {
	id:'studentinfo',
	layout:
	{
		type:'vbox',
		align:'stretch',
		pack:'stretch'
	},
	width:'100%',
	items:[
	       {
	    	   xtype:'fieldset',
				layout:
				{
					type:'fit',
					align:'stretch',
					pack:'stretch'
				},
	    	   title:'Student Info',
	    	   width:"100%",
	    	   instructions:'Your current student info',
	    	   defaults: {
	    		   xtype:'textfield',
	    		   useClearIcon:false,
	    		   autoCapitalize:false,
	    		   cls:'readonlyform',
	    		   disabled:true
	    	   },
	    	   items: [
		           {
		        	   name:'username',
		        	   label:'username'
		           },
		           {
		        	   name:'dinerdollars',
		        	   label:'Diner Dollars'
		           },
		           {
		        	   name:'paymentdue',
		        	   label:'Payment Due'
		           }
	    	   ]
	       }
	],
	initComponent: function() {
		
		
		UPSApp.views.StudentInfo.superclass.initComponent.apply(this, arguments);
	}
});*/