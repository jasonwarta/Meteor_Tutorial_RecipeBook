import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

export default class Recipe extends Component {
	render() {
		// let fav = favorite_id ? 
		// 	<FontAwesome name='heart' /> :
		// 	<FontAwesome name='heart-o' />
		// console.log(this.props);
		let details = `/recipe/${this.props.recipe._id}`;

		return (
			<div>
			<article className="recipe">
				<h3>{this.props.recipe.name}</h3>
				<i><FontAwesome name='pencil'/></i>
				<i><FontAwesome name='trash'/></i>
				<h2>
					<div className="time">
						Difficulty: {this.props.recipe.difficulty}
						<br/>
						<i><FontAwesome name='clock' /></i>
						{this.props.totalTime}
						<br/>
					</div>
				</h2>
				<p>{this.props.recipe.desc}</p>
				<a href={details}>
					Details
				</a>
			</article>
			</div>
		);
	}
}