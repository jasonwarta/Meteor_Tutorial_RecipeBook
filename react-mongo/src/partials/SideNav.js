import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

export default class SideNav extends Component {
	render() {
		return (
			<nav className="side-nav">
			<ul>
				<li>
					<Link to="/myrecipes">
						<i><FontAwesome name='list' /></i>
						My Recipes
					</Link>
				</li>
				<li>
					<Link to="/browse">
						<i><FontAwesome name='map' /></i>
						Browse
					</Link>
				</li>
				<li>
					<Link to="/search">
						<i><FontAwesome name='search' /></i>
						Search
					</Link>
				</li>
				<li>
					<Link to="/favorites">
						<i><FontAwesome name='heart' /></i>
						Favorites
					</Link>
				</li>
				<li>
					<Link to="/help">
						<i><FontAwesome name='question' /></i>
						Help
					</Link>
				</li>
			</ul>
			</nav>
		);
	}
}