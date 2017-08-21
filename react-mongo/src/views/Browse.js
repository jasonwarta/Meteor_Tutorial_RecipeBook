import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

import Recipe from '../recipes/Recipe'

function RecipeList(props) {
	let recipeList = [];
	for (let i in props.recipes) {
		recipeList.push(
			<div key={props.recipes[i]._id}>
				<Recipe recipe={props.recipes[i]} />
			</div>
		)
	}

	return (
		<div>
			{recipeList}
		</div>
	);
}

export default class Browse extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipes: {}
		}
	}

	componentDidMount() {
		fetch(`http://localhost:5000/api/recipes`)
		.then( response => response.json() )
		.then( json => {
			this.setState({
				recipes: json['response']
			});
		})
		.catch(err => {
			console.log(err)
		});
	}

	render() {
		if (Object.keys(this.state.recipes).length === 0 && this.state.recipes.constructor === Object) {
			return <FontAwesome name='spinner' spin size='3x'/>
		} else {
			return (
				<section className="recipes">
					<RecipeList recipes={this.state.recipes} />
				</section>
			);
		}
 	}
}