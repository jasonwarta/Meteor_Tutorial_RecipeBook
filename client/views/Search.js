Template.Search.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('browse');
	});
});

Template.Search.helpers({
	recipes: function(searchString) {
		var pattern = ".*"+searchString+".*";
		return Recipes.find({
			$or:
				[	
					{ name: { $regex: pattern, $options: 'i'} },
					{ desc: { $regex: pattern, $options: 'i'} },
					{ "ingredients.name": { $regex: pattern, $options: 'i'} },
				]
		},{ 
			sort: {insensitive: 1, author: 1, createdAt: 1}
		});
	},
	search: function(){
		return Session.get('searchString');
	}
});

Template.Search.events({
	'keyup .search': function(event) {
		Session.set("searchString",event.currentTarget.value);
	}
})