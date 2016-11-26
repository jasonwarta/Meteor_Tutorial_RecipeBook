// import { Index, MongoDBEngine } from 'meteor/easy:search'

// const RecipeIndex = new Index({
//     collection: Recipes,
//     fields: ['name', 'desc', 'ingredients'],
//     engine: new MongoDBEngine({
// 	    selector(searchDefinition, options, aggregation) {
// 			// retrieve the default selector
// 			const selector = this.defaultConfiguration()
// 			.selector(searchObject, options, aggregation)

// 			// options.search.userId contains the userId of the logged in user
// 			selector.owner = options.search.userId

// 			return selector
// 		},
// 	}),
// 	permission: (options) => options.userId, // only allow searching when the user is logged in
// });

