UPSApp.views.SelectUserType = Ext.extend(Ext.Panel, {
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
	           },
	    	   items:[  
	    		   {
	    			   xtype:'panel',
	    			   height:32,
	    			   align:'center',
	    			   html:"How are you affiliated with UPS?"
	    		   },
			       {
			    	   text:"I'm a Parent",
			    	   flex: 1,
			    	   width:"96%",
			    	   handler:function() {
			    		   User.SetUserType('parent');
			    		   User.OpenPugetsoundWebsite();
			    	   }
			       }, {
			    	   cls:'imageButton',
			    	   html:'<div><div>Student</div><img src="gradcap.png"/></div>',
			    	   flex: 1,
			    	   width:"96%"
			       }, {
			    	   cls:'btn-imastudent',
			    	   flex: 1,
			    	   width:"96%",
			    	   text:"I'm an Alumnus"
			       }]
	       }
	],
	initComponent: function() {
		
		
		UPSApp.views.Viewport.superclass.initComponent.apply(this, arguments);
	}
});