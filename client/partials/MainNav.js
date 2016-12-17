Template.MainNav.helpers({
	username: function() {
		var id=Meteor.users.findOne(Meteor.userId());
		if(typeof(id) !== 'undefined')
			return id.username;
	}
});

Template.MainNav.events({
	'click .login': ()=> {
		Session.set('nav-toggle','open');
	},
	'click .logout': ()=> {
		AccountsTemplates.logout();
	}
});