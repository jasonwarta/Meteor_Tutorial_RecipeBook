if (Meteor.isClient) {
	Accounts.onLogin(function() {
		FlowRouter.go('recipebook');
	});

	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);


FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()) {
			FlowRouter.go('recipebook');
		}
		// GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipebook', {
	name: 'recipebook',
	action() {
		// GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action() {
		// GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeDetails'});
	}
});

// FlowRouter.route('/menu', {
// 	name: 'menu',
// 	action() {
// 		BlazeLayout.render('MainLayout', {main: 'Menu'});
// 	}
// });

// FlowRouter.route('/shopping-list', {
// 	name: 'shopping-list',
// 	action() {
// 		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
// 	}
// });

FlowRouter.notFound = {
	name: '404',
	action() {
		// GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: '404'});
	}
}