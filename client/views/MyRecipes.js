Template.MyRecipes.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
	});
});

Template.MyRecipes.helpers({
	recipes: ()=> {
		return Recipes.find({});
	}
});

Template.MyRecipes.events({
	'click .new-recipe': () => {
		Session.set('newRecipe', true);
	}
});