import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';

import Header from './partials/Header'
import SideNav from './partials/SideNav'

import MyRecipes from './views/MyRecipes'
import Search from './views/Search'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header username="jason" />
          <SideNav />
          
          <main className='main-layout'>

            <Route path="/myrecipes" component={MyRecipes} />
            <Route path="/search" component={Search} />

            <Redirect from="/" to="/myrecipes" />

          </main>
        </div>
      </Router>
    );
  }
}

export default App;