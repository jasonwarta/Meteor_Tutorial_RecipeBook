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

FlowRouter.route('/browse', {
	name: 'browse',
	action() {
		// GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Browse'});
	}
});

FlowRouter.route('/search', {
	name: 'search',
	action() {
		// GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Search'});
	}
});

FlowRouter.route('/favorites', {
	name: 'favorites',
	action() {
		// GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Favorites'});
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipeDetails',
	action() {
		// GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeDetails'});
	}
});

FlowRouter.notFound = {
	name: '404',
	action() {
		// GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: '404'});
	}
}