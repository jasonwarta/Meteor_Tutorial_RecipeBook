Template.NewRecipe.events({
	'click .fa-close': function() {
		Session.set('newRecipe', false);
	},
	'submit': function(){
		Session.set('newRecipe', false);
	}
});