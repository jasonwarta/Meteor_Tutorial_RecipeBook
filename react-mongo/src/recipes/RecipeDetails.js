import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

function PrepTime(props) {
	let prepTime;
	if (props.prepTime) {
		prepTime = (
			<div>
				Prep <i><FontAwesome name='clock-o' /></i>
				{props.prepTime}
				<br/>
			</div>
		);
	} else {
		prepTime = '';
	}

	return prepTime;
}

function Serves(props) {
	let serves;
	if (props.serves) {
		serves = (
			<div>
				Prep <i><FontAwesome name='cutlery' /></i>
				{props.serves}
				<br/>
			</div>
		);
	} else {
		serves = '';
	}

	return serves;
}

function Header(props) {
	return (
		<div>
			<h1>{props.name}</h1>
			<h2>
				{props.author}
				<div className='time'>
					Difficulty: {props.difficulty}
					<br/>
					Total <FontAwesome name='clock-o' /> {props.totalTime}
					<br/>
					<PrepTime prepTime={props.prepTime} />
					<Serves serves={props.serves} />
				</div>
			</h2>
		</div>
	);
}

function Ingredient(props) {
	return (
		<ul className='ingredient'>
			{props.amount} {props.name}
		</ul>
	);
}

function IngredientList(props) {
	let ingredientsList = [];
	for (let i in props.ingredients) {
		ingredientsList.push(
			<Ingredient 
				key={props.ingredients[i].name}
				name={props.ingredients[i].name}
				amount={props.ingredients[i].amount} 
			/>
		);
	}

	return (
		<div>
			<h3>Ingredients</h3>
			{ingredientsList}
		</div>
	);
}

function Direction(props) {
	return (
		<div>
			<ul className="direction">
				<span className="step-num">
					{props.stepNo}
				</span>
				&nbsp;&nbsp;{props.directions}
			</ul>
		</div>
	);
}

function Notes(props) {
	let notes;
	if (props.notes) {
		notes = (
			<div>
				<h3>Notes</h3>
				<dd>{props.notes}</dd>
			</div>
		);
	} else {
		notes = '';
	}

	return notes;
}

function DirectionList(props) {
	let directionList = []
	for (let i in props.directions) {
		directionList.push(
			<Direction 
				key={props.directions[i].stepNo}
				stepNo={props.directions[i].stepNo}
				directions={props.directions[i].directions}
			/>
		);
	}

	return (
		<div>
			<h3>Directions</h3>
			{directionList}
		</div>
	);
}

export default class RecipeDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipe: {}
		}
	}

	componentDidMount() {
		fetch(`http://localhost:5000/api/recipes/${this.props.location.pathname.split('/')[2]}`)
		.then( response => response.json() )
		.then( json => {
			this.setState({
				recipe: json['response'][0]
			});
		})
		.catch(err => {
			console.log(err)
		});
	}

	render() {
		// black magic to check if the recipe state is empty
		if (Object.keys(this.state.recipe).length === 0 && this.state.recipe.constructor === Object) {
			return <FontAwesome name='spinner' spin size='3x'/>
		} else {
			let recipe = this.state.recipe;

			return (
				<div>
					<article className='recipe-detail'>
						<Header 
							name={recipe.name} 
							author={recipe.author} 
							difficulty={recipe.difficulty} 
							totalTime={recipe.totalTime} 
							prepTime={recipe.prepTime} 
							serves={recipe.serves} 
						/>
						<p className='desc'>{recipe.desc}</p>
						<IngredientList ingredients={recipe.ingredients} />
						<DirectionList directions={recipe.directions} />
						<Notes notes={recipe.notes} />
					</article>
				</div>
			);
		}
	}
}