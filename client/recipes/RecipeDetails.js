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
	}
});

Template.RecipeDetails.events({
	'click .fa-pencil' : function(event, template) {
		template.editMode.set(!template.editMode.get());
	}
});