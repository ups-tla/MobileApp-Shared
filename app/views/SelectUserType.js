UPSApp.views.SelectUserType = Ext.extend(Ext.Panel, {
	cardSwitchAnimation:'slide',
	dockedItems:[],
	items:[
	       {
	    	   xtype:'button',
	    	   text:"I'm a Parent",
	    	   handler:function() {
	    		   User.SetUserType('parent');
	    		   UPSApp.views.viewport.setActiveItem('parenthome');
	    	   }
	       },
	       {
	    	   xtype:'button',
	    	   text:"I'm a Student"
	       },
	       {
	    	   xtype:'button',
	    	   text:"I'm an Alumnus"
	       }
	],
	initComponent: function() {
		
		
		UPSApp.views.Viewport.superclass.initComponent.apply(this, arguments);
	}
});