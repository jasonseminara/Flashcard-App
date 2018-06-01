import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import Quiz from '../partials/deck';
// import { getDecks } from '../services/apiservice';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class QuizPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      quizzes: [],
      quizzesLoaded: false
    };
    this.handleClickForCreate = this.handleClickForCreate.bind(this);
  }
  getDecks() {
    const jwt = localStorage.getItem("jwt")
    const init = {
      headers: {"Authorization": `Bearer ${jwt}`}
    }
    fetch(`${BASE_URL}/api/quizzes`, init)
    .then(res => res.json())
    .then(data => this.setState({
      quizzes: data,
      quizzesLoaded: true
    }))
    .catch(err => err)
  }

  componentDidMount() {
    this.getDecks()

  }

  renderQuizzes() {
    if(this.state.quizzesLoaded) {
      console.log(this.state.quizzes)
      return (this.state.quizzes.map((quiz) => {
        return (
          <Quiz
          quiz={quiz}
          key={quiz.id}/>
        )
        }))
      } else {
      return (<h1>Loading</h1>)
    }
  }
  handleClickForCreate() {
    console.log('creating')
  }
  render() {
    // main container for the main view on the page
    // container for login/signup components
    return (
      <div className="quiz-page">
        <div className='quiz-page-container'>
        { this.renderQuizzes() }
        <button onClick={this.handleClickForCreate}><Link to="/quiz/create">Create a Quiz!</Link></button>
        </div>
      </div>
    );
  }
}

export default QuizPage;
