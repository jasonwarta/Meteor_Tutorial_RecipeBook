Template.MainNav.events({
	'click .login': ()=> {
		Session.set('nav-toggle','open');
	},
	'click .logout': ()=> {
		AccountsTemplates.logout();
	}
});