Meteor.publish('recipes', function(){
	return Recipes.find({author: this.userId});
});

Meteor.publish('singleRecipe', function(id) {
	check(id, String);
	return Recipes.find({_id: id});
});

Meteor.publish('browse', function(){
	return Recipes.find({});
});

Meteor.publish('favs', function(){
	return Recipes.find({favorites: this.userId});
});

Meteor.publish('author',function(){
	return Meteor.users.find({},{fields: {username:1}});
});

Meteor.publish('singleAuthor', function(id) {
	return Meteor.users.find({_id:id},{fields: {username:1}});
});