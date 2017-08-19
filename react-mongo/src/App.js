import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import Header from './partials/Header'
import SideNav from './partials/SideNav'

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
              <Route path="/browse" />
              <Route path="/search" component={Search} />
              <Route path="/favorites" />
              <Route path="/recipe/:id" />
              <Route path="/help" />
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