Recipes = new Mongo.Collection('recipes');

Recipes.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

Ingredient = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	amount: {
		type: String,
		label: "Quantity"
	}
});

Direction = new SimpleSchema({
	stepNo: {
		type: Number,
		label: "Step"
	},
	directions: {
		type: String,
		label: "Directions",
		autoform: {
			rows: 5,
		}
	}
});

RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: "Description"
	},
	difficulty: {
		type: String
	},
	totalTime: {
		type: String
	},
	prepTime: {
		type: String
	},
	serves: {
		type: Number
	},
	ingredients: {
		type: [Ingredient]
	},
	directions: {
		type: [Direction]
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	toggleMenuItem: function(id, currentState) {
		Recipes.update(id, {
			$set: {
				inMenu: !currentState
			}
		});
	},
	deleteRecipe: function(id) {
		Recipes.remove(id);
	}
});


Recipes.attachSchema( RecipeSchema );