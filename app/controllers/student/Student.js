Ext.regController('Student', {
	info: function() {
		// Just show the info pane
		UPSApp.views.viewport.setActiveItem('studentinfo');
	},
	news: function() {
	    UPSApp.views.viewport.setActiveItem('studentnews');
	},
	tickettotacoma: function() {
	    UPSApp.views.viewport.setActiveItem('tickettotacoma'); 
	},
	heyyousubmission: function() {
	    UPSApp.views.viewport.setActiveItem('heyyousubmission'); 
	},
	submitheyyou: function(params) {
	    console.log("Hey you submission:");
	    console.log(params.data.heyyoutext);
	},
	login: function(params) {
		
		// TODO: Attempt to login and store a session cookie
		// For now, we just create some fake user info
		
	    /*
		if(!params)
			console.log("No username or password passed to login, assuming we're resuming session");
		else
			console.log("Username and password supplied \"logging in\"");
			*/
		
		if(!UPSApp.stores.studentinfo.first())
			UPSApp.stores.studentinfo.add({username:''});
		
		var student = UPSApp.stores.studentinfo.first();
		
		student.set("username", 'TestUsername');
		student.set("name","Test T. Testington");
		student.set("dinerdollars","100.00");
		student.set("paymentdue","1000");
			
		
		// Update the student info panel
		console.log(UPSApp.stores.studentinfo.first());
		UPSApp.views.studentInfo.update(UPSApp.stores.studentinfo.first().data);
		UPSApp.views.studentInfo.doLayout();
		
		// Switch to StudentHome panel
		UPSApp.views.viewport.setActiveItem('studenthome');
		UPSApp.views.studentInfo.doLayout();
	}
});