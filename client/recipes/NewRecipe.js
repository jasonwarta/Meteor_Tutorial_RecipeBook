Template.NewRecipe.events({
	'click .fa-close': function() {
		Session.set('newRecipe', false);
	}
});

AutoForm.hooks({
  insertRecipeForm: {
    onSuccess: function () {
		Session.set('newRecipe', false);
    }
  }
});