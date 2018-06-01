import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Nav from './partials/nav';
import LogIn from './components/login';
import Register from './components/register';
import LandingPage from './components/landingpage';
import QuizPage from './components/quizpage';
import ProfilePage from './components/profilepage';
import StudyPage from './components/studypage';
import QuizCreateForm from './components/createquizpage';

import { createQuiz, createQuestion } from './services/apiservice';
import { login, register} from './services/authservice';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor () {
    super();
    this.state = {
      decks: [],
      currentUser: '',
      createdQuiz: null,
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

  handleLogin(inp) {
    login(inp)
  }

  handleRegister(inp) {
    register(inp)
  }

  handleCreateQuiz(inp) {
    createQuiz(inp)
  }
  handleCreateQuestions(inp) {
    createQuestion(inp)
  }

  componentDidMount() {
    this.isLoggedIn()
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path ="/" render={()=> (
            <LandingPage />
          )} />
          <Route exact path ="/login" render={()=> (
            <LogIn onSubmit={this.handleLogin} />
          )} />
          <Route exact path ="/register" render={()=> (
            <Register onSubmit={this.handleRegister} />
          )} />
          <Route exact path ="/quiz" render={()=> (
            <QuizPage />
          )} />
          <Route exact path ="/quiz/create" render={()=> (
            <QuizCreateForm handleCreateQuiz={this.handleCreateQuiz} quiz={this.state.createdQuiz}/>
          )} />
          <Route exact path ="/quiz/:id" render={(props)=> (
            <StudyPage {...props}/>
          )} />
          <Route exact path ="/profile" render={()=> (
            <ProfilePage />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
