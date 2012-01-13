UPSApp.views.SelectUserType = Ext.extend(Ext.Panel, {
	id:'selectusertype',
	layout:'card',
	items:[
	       {
	           xtype: 'container',
	           layout: {
	               type: 'vbox',
	               pack: 'stretch',
	           },
	           defaults: {
	               xtype: 'button',
	               ui: 'maroon',
	               style: { marginBottom:'1%'}
	           },
	    	   items:[  
	    		   {
	    			   xtype:'panel',
	    			   height:32,
	    			   align:'center',
	    			   html:"How are you affiliated with UPS?",
	    		   },
			       {
	    			   html:'<div><img src="sencha/resources/upsstyle/images/icons/studentparent.png"/><div>Parent</div></div>',
	    			   cls:'imageButton',
			    	   flex: 1,
			    	   width:"96%",
			    	   handler:function() {
			    		   User.SetUserType('parent');
			    		   User.OpenPugetsoundWebsite();
			    	   }
			       }, {
			    	   cls:'imageButton',
			    	   html:'<div><img src="sencha/resources/upsstyle/images/icons/gradcap.png"/><div>Student</div></div>',
			    	   flex: 1,
			    	   width:"96%",
			    	   handler:function() {
			    		   User.SetUserType('student');
			    		   UPSApp.views.viewport.setActiveItem('studentlogin');
			    	   }
			    	   
			       }, {
			    	   cls:'imageButton',
			    	   html:'<div><img src="sencha/resources/upsstyle/images/icons/scroll.png"/><div>Alumnus</div></div>',
			    	   flex: 1,
			    	   width:"96%"
			       }]
	       }
	],
	initComponent: function() {
		
		
		UPSApp.views.SelectUserType.superclass.initComponent.apply(this, arguments);
	}
});