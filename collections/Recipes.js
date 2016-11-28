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
		label: "Name",
		max: 50
	},
	amount: {
		type: String,
		label: "Quantity",
		max: 50
	}
});

Direction = new SimpleSchema({
	stepNo: {
		type: String,
		label: "Step",
		max: 10
	},
	directions: {
		type: String,
		label: "Directions",
		autoform: {
			rows: 5,
		},
		max: 600
	}
});

RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 50
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
		label: "Description",
		max: 200
	},
	difficulty: {
		type: String,
		max: 30
	},
	totalTime: {
		type: String,
		max: 30
	},
	prepTime: {
		type: String,
		max: 30
	},
	serves: {
		type: String,
		max: 30
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
		},
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