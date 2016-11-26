Template.Header.events({
	'click .login': ()=> {
		Session.set('nav-toggle','open');
	},
	'click .logout': ()=> {
		Meteor.logout();
	}
});