UPSApp.views.StudentLogin = Ext.extend(Ext.form.FormPanel, {
	id:'studentlogin',
	layout:'vbox',
	items:[
	       {
	    	   xtype:'fieldset',
	    	   title:'Student Login',
	    	   instructions:'Enter your student account info.',
	    	   defaults: {
	    		   xtype:'textfield',
	    		   required:true,
	    		   useClearIcon:true,
	    		   autoCapitalize:false
	    	   },
	    	   items: [
		           {
		        	   name:'username',
		        	   label:'username'
		           },
		           {
		        	   xtype:'passwordfield',
		        	   name:'password',
		        	   label:'password'
		           }
	    	   ]
	       },
	       {
	    	   ui:'action',
	    	   xtype:'button',
	    	   text:'Login',
	    	   handler:function()
	    	   {		
					Ext.dispatch({
						controller: 'Student',
						action:'login',
						data: this.ownerCt.getValues()
					});
			   }
	       }
	],
	initComponent: function() {
		
		
		UPSApp.views.StudentLogin.superclass.initComponent.apply(this, arguments);
	},
	onLoginAction: function() {

	}
});