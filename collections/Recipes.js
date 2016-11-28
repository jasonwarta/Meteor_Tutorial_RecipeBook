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
		type: String,
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
	insensitive: {
		type: String,
		label: "Insensitive",
		autoValue: function() {
			if (this.field('name').value)
				return this.field('name').value.toLowerCase();
		},
		autoform: {
			type: "hidden"
		}
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
		type: String
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
			if (this.isInsert){
				return this.userId
			} else {
				return this.field('author').value
			}
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			if (this.isInsert){
				return new Date();
			}
		},
		autoform: {
			type: "hidden"
		}
	},
	favorites: {
		type: [String],
		optional: true,
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	deleteRecipe: function(id) {
		Recipes.remove(id);
	},
	setFavorite: function(recipeId) {
		Recipes.update({
			_id: recipeId
		},{
			$push: { favorites: this.userId },
		});
	},
	removeFavorite: function(recipeId){
		Recipes.update({
			_id: recipeId,
		},{
			$pull: { favorites: this.userId }
		});
	}
});


Recipes.attachSchema(RecipeSchema);