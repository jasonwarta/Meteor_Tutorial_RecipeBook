Meteor.publish('recipes', function(){
	return Recipes.find({author: this.userId},{ sort: {name: 1}});
});

Meteor.publish('singleRecipe', function(id) {
	check(id, String);
	return Recipes.find({_id: id});
});

Meteor.publish('browseRecipes', function(){
	return Recipes.find();
});