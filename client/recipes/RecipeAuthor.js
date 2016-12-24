Template.RecipeAuthor.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
		self.subscribe('author');
	});
});

Template.RecipeAuthor.helpers({
	recipes: ()=> {
		return Recipes.find({});
	},
	recipeAuthor: function(id) {
		var id=Meteor.users.findOne(id);
		if(typeof(id) !== 'undefined')
			return id.username;
	},
	favorite: function(id) {
		var favs = Recipes.findOne(id).favorites;
		if(typeof(favs) !== 'undefined')
			return favs.includes(Meteor.userId())
	}
});

Template.RecipeAuthor.events({
	'click .fa-heart' : function(event, template) {
		Meteor.call('removeFavorite',template.data._id)
	},
	'click .fa-heart-o' : function(event, template) {
		Meteor.call('setFavorite',template.data._id)
	},
	'click h3' : function(event, template) {
		FlowRouter.go('/recipe/'+this._id);
	}
});