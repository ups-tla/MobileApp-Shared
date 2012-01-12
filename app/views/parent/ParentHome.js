UPSApp.views.ParentHome = Ext.extend(Ext.Panel, {
	id:'parenthome',
	layout:'fit',
	html:'<div style="overflow: scroll;height: 100%;width: 100%;"><iframe src ="http://www.pugetsound.edu"></iframe></div>',
	initComponent: function() {
		
		UPSApp.views.Viewport.superclass.initComponent.apply(this, arguments);
	}
});