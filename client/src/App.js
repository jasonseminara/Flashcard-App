import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Nav from './partials/nav';
import LogIn from './components/login';
import Register from './components/register';
import LandingPage from './components/landingpage';
import DeckPage from './components/deckpage';
import ProfilePage from './components/profilepage';
import StudyPage from './components/studypage';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor () {
    super();
    this.state = {
      decks: [],
      currentUser: '',
      isLoggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }
  isLoggedIn() {
    const res = !!(localStorage.getItem("jwt"));
    this.setState({
      isLoggedIn: res,
    })
    return res;
  }


  login (inputs) {
    const body = {"auth": {"email": inputs.email, "password": inputs.password}}
    const init = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(body),
    }
    console.log(init)
    fetch(`${BASE_URL}/api/user_token`, init)
    .then(res => res.json())
    .then(res => {
      localStorage.setItem("jwt", res.jwt)
    })
    .catch(err => console.log(err))
  }

  handleLogin(inp) {
    this.login(inp)
  }
  register(inputs) {
    const body = {"user": {"email": inputs.email, "password": inputs.password, "password_confirmation": inputs.password}}
    const init = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(body),
    }
    console.log(init)
    fetch(`${BASE_URL}/api/users`, init)
    .then(res => res.json())
    .then(() => this.setState({
      isLoggedIn: true,
    }))
    .catch(err => console.log(err))
  }
  handleRegister(inp) {
    this.register(inp)
  }
  componentDidMount() {
    this.isLoggedIn()
  }

  render() {
    return (
      <div>
        <Nav />
        <Route exact path ="/" render={()=> (
          <LandingPage />
        )} />
        <Route exact path ="/login" render={()=> (
          <LogIn onSubmit={this.handleLogin} />
        )} />
        <Route exact path ="/register" render={()=> (
          <Register onSubmit={this.handleRegister} />
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
