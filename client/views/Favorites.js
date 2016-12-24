Template.Favorites.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('favs');
	});
});

Template.Favorites.helpers({
	recipes: ()=> {
		return Recipes.find({
			favorites: Meteor.userId()
		},{ 
			sort: {insensitive: 1, author: 1, createdAt: 1}
		});
	}
});