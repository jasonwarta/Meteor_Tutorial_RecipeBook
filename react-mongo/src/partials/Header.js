import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

export default class Header extends Component {
	constructor(props){
		super(props);

		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.state = {
			loggedIn: false
		}
	}

	handleLogin() {
		this.setState({
			loggedIn: true
		});
	}

	handleLogout() {
		this.setState({
			loggedIn: false
		});
	}

	render() {
		var greeting = this.state.loggedIn ? 
			( <h3>
				<li className='hello'>
					Hello, {this.props.username}
				</li>
				<li className='logout' onClick={this.handleLogout}>
					Logout
				</li>
			</h3> )
			:
			( <h3>
				<li className='login' onClick={this.handleLogin}>
					Login/Sign-up
				</li>
			</h3> );

		return (
			<header className="header">
				<a href="/" style={{textDecoration: 'none'}}>
					<h1>
						<i><FontAwesome name="cutlery" /></i>&nbsp;
						Recipe Book
					</h1>
				</a>

				<ul className="greeting">
					{greeting}
				</ul>
			</header>
		);
	}
}

// export Header;