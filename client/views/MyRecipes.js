Template.MyRecipes.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
	});
});

Template.MyRecipes.helpers({
	recipes: ()=> {
		return Recipes.find({},{ sort: {insensitive: 1, author: 1, createdAt: 1}});
	}
});

Template.MyRecipes.events({
	'click .new-recipe': () => {
		Session.set('newRecipe', true);
	}
});