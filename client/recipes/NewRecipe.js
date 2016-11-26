Template.NewRecipe.events({
	'click .fa-close': function() {
		Session.set('newRecipe', false);
	},
	'click .btn-primary': function(){
		Session.set('newRecipe', false);
	}
});