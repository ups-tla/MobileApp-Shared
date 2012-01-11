
Ext.regApplication('UPSApp', {
	defaultTarget:'viewport',
	name:'UPSApp',
	launch: function() {
		
		// The Ext.regApplication call automatically creates our 'views' namespace
		this.views.viewport = new this.views.Viewport();
	}
});
