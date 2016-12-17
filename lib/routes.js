if (Meteor.isClient) {
	Accounts.onLogin(function() {
		FlowRouter.go('myrecipes');
	});

	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});
}

FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()) {
			FlowRouter.go('myrecipes');
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/myrecipes', {
	name: 'myrecipes',
	action() {
		if(!Meteor.userId()){
			FlowRouter.go('home');
		}
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'MyRecipes'});
	}
});

FlowRouter.route('/browse', {
	name: 'browse',
	action() {
		if(!Meteor.userId()){
			FlowRouter.go('home');
		}
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Browse'});
	}
});

FlowRouter.route('/search', {
	name: 'search',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Search'});
	}
});

FlowRouter.route('/favorites', {
	name: 'favorites',
	action() {
		if(!Meteor.userId()){
			FlowRouter.go('home');
		}
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Favorites'});
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipeDetails',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeDetails'});
	}
});

FlowRouter.notFound = {
	name: '404',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: '404'});
	}
}