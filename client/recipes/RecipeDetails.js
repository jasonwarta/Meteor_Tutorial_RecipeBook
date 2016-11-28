Template.RecipeDetails.onCreated(function() {
	this.editMode = new ReactiveVar(false);
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('singleRecipe', id);
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
	}
});

Template.RecipeDetails.events({
	'click .fa-pencil' : function(event, template) {
		template.editMode.set(!template.editMode.get());
	},
	'click .btn-primary': function(event, template){
		template.editMode.set(false);
	}
});