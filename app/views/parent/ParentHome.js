UPSApp.views.ParentHome = Ext.extend(Ext.Panel, {
	id:'parenthome',
	dockedItems:[],
	items:[],
	html:"<p>I'm a <b>Parent</b></p>",
	initComponent: function() {
		
		UPSApp.views.Viewport.superclass.initComponent.apply(this, arguments);
	}
});