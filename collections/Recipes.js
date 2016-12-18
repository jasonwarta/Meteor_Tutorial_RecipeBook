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
	  	regEx: /^[A-Za-z0-9\-.',].*$/,
		max: 50
	},
	amount: {
		type: String,
		label: "Quantity",
	  	regEx: /^[A-Za-z0-9\-.',].*$/,
		max: 50
	}
});

Direction = new SimpleSchema({
	stepNo: {
		type: Number,
		label: "Step",
		min: 1,
		defaultValue: function(){
			return parseInt(this.name.split('.')[1]) + 1;
		}
	},
	directions: {
		type: String,
		label: "Directions",
	  	regEx: /^[A-Za-z0-9\-.',].*$/,
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
		max: 50,
	  	regEx: /^[A-Za-z0-9\-.',].*$/,
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
		max: 200,
	  	regEx: /^[A-Za-z0-9\-.',].*$/,
	},
	source: {
		type: String,
		label: "Source",
		optional: true,
		max: 50,
	  	regEx: /^[A-Za-z0-9\-.',].*$/,
	},
	difficulty: {
		type: String,
		allowedValues: ['Easy', 'Average', 'Difficult'],
	    autoform: {
	        options: [
		        {label: "Easy", value: "Easy"},
		        {label: "Average", value: "Average"},
		        {label: "Difficult", value: "Difficult"}
	        ]
	    }
	},
	totalTime: {
		type: String,
	  	regEx: /^[A-Za-z0-9\-.',].*$/,
		max: 30
	},
	prepTime: {
		type: String,
		optional: true,
	  	regEx: /^[A-Za-z0-9\-.',].*$/,
		max: 30
	},
	serves: {
		type: String,
		optional: true,
	  	regEx: /^[A-Za-z0-9\-.',].*$/,
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
	},
	log: function(item){
		console.log(this);
	}
});


Recipes.attachSchema(RecipeSchema);