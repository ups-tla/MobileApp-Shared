var User;

UPSApp.views.Viewport = Ext.extend(Ext.Panel, {
	fullscreen:true,
	layout: 'card',
	cardSwitchAnimation:'pop',
	align:'stretch',
	scroll:false,
	dockedItems:[
		new Ext.Toolbar({
			ui: 'maroon',
			dock:'bottom',
			title:"Debug",
			items:[
			       {
			    	   xtype:'button',
			    	   text:'Reset Usertype',
			    	   handler:function(){User.SetUserType("none");}
			       }
			 ]
		})
	],
	items:[],
	activeItem:0,
	initComponent: function() {
		
		User = new UPSUser();
		
		UPSApp.views.toolbar = new Ext.Toolbar({
			title:'University of Puget Sound'
		});
		
		this.dockedItems[1] = UPSApp.views.toolbar;
		
		UPSApp.views.selectUserType = new UPSApp.views.SelectUserType();
		UPSApp.views.parentHome = new UPSApp.views.ParentHome();
		
		this.items[0] = UPSApp.views.selectUserType;
		this.items[1] = UPSApp.views.parentHome;
		
		if(User.GetUserType() == "none")
			Ext.apply(this, {
				activeItem:0
			})
		else if(User.GetUserType() == "parent")
			User.SetUserType("none");
		
		UPSApp.views.Viewport.superclass.initComponent.apply(this, arguments);
	}
});