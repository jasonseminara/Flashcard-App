import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';

import Nav from './partials/nav';
import LogIn from './components/login';
import LandingPage from './components/landingpage';
import DeckPage from './components/deckpage';
import ProfilePage from './components/profilepage';
import StudyPage from './components/studypage';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor () {
    super();
    this.state = {
      decks: []
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <Route exact path ="/" render={()=> (
          <LandingPage />
        )} />
        <Route exact path ="/decks/:id" render={(props)=> (
          <StudyPage {...props}/>
        )} />
        <Route exact path ="/decks" render={()=> (
          <DeckPage />
        )} />
        <Route exact path ="/profile" render={()=> (
          <ProfilePage />
        )} />

      </div>
    );
  }
}

export default App;
