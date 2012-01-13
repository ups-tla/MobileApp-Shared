var User;

Ext.regApplication('UPSApp', {
	defaultTarget:'viewport',
	name:'UPSApp',
	launch: function() {
		User = new UPSUser();
		// The Ext.regApplication call automatically creates our 'views' namespace
		this.views.viewport = new this.views.Viewport();
		
		this.views.viewport.onStart();
	}
});
