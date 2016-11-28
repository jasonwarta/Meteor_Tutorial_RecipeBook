Template.Browse.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('browse');
	});
});

Template.Browse.helpers({
	recipes: ()=> {
		return Recipes.find({},{ sort: {insensitive: 1, author: 1, createdAt: 1}});
	}
});