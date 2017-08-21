import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import Header from './partials/Header'
import SideNav from './partials/SideNav'

import RecipeDetails from './recipes/RecipeDetails'

import Browse from './views/Browse'
import Help from './views/Help'
import MyRecipes from './views/MyRecipes'
import Search from './views/Search'
import NoMatch from './views/NoMatch'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header username="jason" />
          <SideNav />

          <main className='main-layout'>

            <Switch>
              <Route path="/myrecipes" component={MyRecipes} />
              <Route path="/browse" component={Browse} />
              <Route path="/search" component={Search} />
              <Route path="/favorites" />
              <Route path="/recipe/:id" component={RecipeDetails} />
              <Route path="/help" component={Help} />
              <Redirect exact from="/" to="/myrecipes" />
              <Route component={NoMatch} />
            </Switch>

          </main>
        </div>
      </Router>
    );
  }
}

export default App;