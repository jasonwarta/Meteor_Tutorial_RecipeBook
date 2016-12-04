Template.Recipe.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.Recipe.helpers({
	updateRecipeId: function() {
		return this._id;
	},
	editMode: function() {
		return Template.instance().editMode.get();
	},
	favorite: function(id) {
		var favs = Recipes.findOne(id).favorites;
		if(typeof(favs) !== 'undefined')
			return favs.includes(Meteor.userId())
	}
});

Template.Recipe.events({
	'click .fa-trash': function() {
		Meteor.call('deleteRecipe', this._id);
	},
	'click .fa-pencil': function(event, template) {
		template.editMode.set(!template.editMode.get());
	},
	'submit': function(event, template){
		template.editMode.set(false);
	},
	'click .fa-heart' : function(event, template) {
		Meteor.call('removeFavorite',template.data._id)
	},
	'click .fa-heart-o' : function(event, template) {
		Meteor.call('setFavorite',template.data._id)
	}
});