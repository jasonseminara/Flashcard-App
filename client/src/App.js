import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Nav from './partials/nav';
import LogIn from './components/login';
import Register from './components/register';
import LandingPage from './components/landingpage';
import QuizPage from './components/quizpage';
import ProfilePage from './components/profilepage';
import StudyPage from './components/studypage';
import QuizCreateForm from './components/createquizpage';

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
    this.handleCreateQuiz = this.handleCreateQuiz.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }
  // checks local storage for jwt, returns boolean on its existence.
  isLoggedIn() {
    const res = !!(localStorage.getItem("jwt"));
    this.setState({
      isLoggedIn: res,
    })
    return res;
  }
//login funciton
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
  //register function
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
    .catch(err => console.log(err))
  }
  handleRegister(inp) {
    this.register(inp)
  }
  createQuiz(inputs) {
    const body = {"quiz": {"name": inputs.name, "description": inputs.description}}
    const jwt = localStorage.getItem("jwt")
    const init = {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`},
      mode: 'cors',
      body: JSON.stringify(body)
    }
    console.log(init)
    fetch(`${BASE_URL}/api/quizzes/`, init)
    .then(res => res.json())
    .catch(err => console.log(err))
  }
  handleCreateQuiz(inp) {
    this.createQuiz(inp)
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
        <Route exact path ="/quiz/:id" render={(props)=> (
          <StudyPage {...props}/>
        )} />
        <Route exact path ="/quiz" render={()=> (
          <QuizPage />
        )} />
        <Route exact path ="/quiz/create" render={()=> (
          <QuizCreateForm onSubmit={this.handleCreateQuiz}/>
        )} />
        <Route exact path ="/profile" render={()=> (
          <ProfilePage />
        )} />

      </div>
    );
  }
}

export default App;
