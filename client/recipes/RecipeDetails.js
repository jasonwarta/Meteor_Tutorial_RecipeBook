Template.RecipeDetails.onCreated(function() {
	this.editMode = new ReactiveVar(false);
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('singleRecipe', id);
		var user = Recipes.find({_id:id},{fields: {author:1}}).fetch()[0];
		if(typeof(user) !== 'undefined'){
			var author = user["author"];
			self.subscribe('singleAuthor',author);
		}
	});
});

Template.RecipeDetails.helpers({
	updateRecipeId: function() {
		var id = FlowRouter.getParam('id');
		return id;
	},
	recipe: ()=> {
		var id = FlowRouter.getParam('id');
		return Recipes.findOne({_id: id});
	},
	editMode: function() {
		return Template.instance().editMode.get();
	},
	recipeOwner: function(){
		var id = FlowRouter.getParam('id');
		var recipe = Recipes.findOne({_id:id})
		if(typeof(recipe) !== 'undefined')
			return recipe.author == Meteor.userId();
	},
	recipeAuthor: function(id) {
		var id=Meteor.users.findOne(id);
		if(typeof(id) !== 'undefined')
			return id.username;
	},
});

Template.RecipeDetails.events({
	'click .fa-trash': function() {
		Meteor.call('deleteRecipe', this._id);
	},
	'click .fa-pencil' : function(event, template) {
		template.editMode.set(!template.editMode.get());
	},
	'submit': function(event, template){
		template.editMode.set(false);
	}
});