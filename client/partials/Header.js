Template.Header.helpers({
	username: function() {
		var id=Meteor.users.findOne(Meteor.userId());
		if(typeof(id) !== 'undefined')
			return id.username;
	}
});

Template.Header.events({
	'click .login': ()=> {
		Session.set('nav-toggle','open');
	},
	'click .logout': ()=> {
		Meteor.logout();
	}
});