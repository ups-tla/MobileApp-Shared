UPSApp.views.Viewport = Ext.extend(Ext.Panel, {
	fullscreen:true,
	layout: 'card',
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
	items:[
		{
			xtype:'panel',
			html:'Loading...'
		}
	],
	activeItem:0,
	onStart: function() {
		
		UPSApp.views.selectUserType = new UPSApp.views.SelectUserType();
		UPSApp.views.parentHome = new UPSApp.views.ParentHome();
		UPSApp.views.studentLogin = new UPSApp.views.StudentLogin();
		UPSApp.views.studentInfo = new UPSApp.views.StudentInfo();
		UPSApp.views.studentHome = new UPSApp.views.StudentHome();
		UPSApp.views.studentNews = new UPSApp.views.StudentNews();
		UPSApp.views.newsDetail = new UPSApp.views.NewsDetail();
		UPSApp.views.ticketToTacoma = new UPSApp.views.TicketToTacoma();
		UPSApp.views.heyYouSubmission = new UPSApp.views.HeyYouSubmission();

		this.add(UPSApp.views.selectUserType);
		this.add(UPSApp.views.parentHome);
		this.add(UPSApp.views.studentLogin);
		this.add(UPSApp.views.studentInfo);
		this.add(UPSApp.views.studentHome);
		this.add(UPSApp.views.studentNews);
		this.add(UPSApp.views.newsDetail);
		this.add(UPSApp.views.ticketToTacoma);
		this.add(UPSApp.views.heyYouSubmission);
		
		if(User.GetUserType() == "none")			// Go to the select user type panel
			this.setActiveItem('selectusertype');
		else if(User.GetUserType() == "parent") 	// DEBUG: just reset to none, otherwise we will probably go to school website
		{
		    // TEMP
			User.SetUserType("none");
			this.setActiveItem('selectusertype');
		}
		else if(User.GetUserType() == "student")	// Log in 
			Ext.dispatch({
				controller: 'Student',
				action:'login'
			});
	},
	initComponent: function() {
		
		
		
		UPSApp.views.toolbar = new Ext.Toolbar({
			title:'University of Puget Sound'
		});
		
		this.dockedItems[1] = UPSApp.views.toolbar;
		

		
		UPSApp.views.Viewport.superclass.initComponent.apply(this, arguments);

	}
});