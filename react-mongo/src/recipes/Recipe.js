import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

export default class Recipe extends Component {
	render() {
		let fav = favorite_id ? 
			<FontAwesome name='heart' /> :
			<FontAwesome name='heart-o' />

		return (
			<article className="recipe" style="{{#if emptyDesc desc}}'padding: 0 20px 40px;'{{/if}}">
				<h3>{this.props.name}</h3>
				<i>{fav}/i>
				<i><FontAwesome name='pencil'/></i>
				<i><FontAwesome name='trash'/></i>
				<h2>
					<div className="time">
						Difficulty: {this.props.difficulty}
						<br/>
						<i><FontAwesome name='clock' /></i>
						{this.props.totalTime}
						<br/>
					</div>
				</h2>
				{{#if editMode }}
					{{> quickForm collection="Recipes" id=updateRecipeId type="update" doc=this autosave=true resetOnSuccess=false}}
				{{else}}
					<p>{{desc}}</p>
					<a href="/recipe/{{_id}}">Details</a>
				{{/if}}
			</article>
		);
	}
}