import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
		};

		this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
	}

	handleSearchTextInput(e) {
		this.setState({
			searchText: e.target.value
		});
		console.log(this.state.searchText);
	}

	render() {
		return (
			<section className="recipes">
				<div>
					<input 
						type="text" 
						className="search" 
						placeholder={this.state.searchText}
						onChange={this.handleSearch}
					/>
				</div>
				<FontAwesome name='spinner' spin size='3x'/>
			</section>
		);
	}
}