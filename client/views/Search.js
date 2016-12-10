Template.Search.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('browse');
	});
});

Template.Search.helpers({
	recipes: function(searchString) {
		if(searchString != "" && typeof(searchString) !== 'undefined'){
			if(searchString.indexOf(',') > -1){
				var strings = searchString.split(',');

				var query = {};
				query["$and"] = [];
				for (var s in strings){
					query["$and"].push({
						"ingredients.name": 
						{
							$regex: ".*"+strings[s]+".*", $options: 'i'
						}
					});
				}
				return Recipes.find(query,
					{sort: {insensitive: 1, author: 1, createdAt: 1}}
				);
			}

			else {
				var pattern=".*"+searchString+".*";
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
			}
		}
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