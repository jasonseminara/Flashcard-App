import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import CreateCardForm from './createcard';

// import Quiz from '../partials/deck';
import { createQuiz } from '../services/apiservice';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class QuizCreateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quizID: null,
      name: '',
      description: '',
      created: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    createQuiz(this.state)
    .then(respBody => this.setState({
      quizID: respBody.id
    }))
    this.setState({
      name:'',
      description:'',
      created: true
    })
  }
  render() {
    return (
      <div className="quiz-page">
        <div className='quiz-page-container'>
          <h1>Let's create a Quiz!</h1>
          <form onSubmit={this.handleSubmit}>
          <label htmlFor="name"> Name of Quiz: </label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}placeholder="Quiz Name" ></input>
          <label htmlFor="description"> description: </label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange}placeholder="Description" ></input>
            <button value="submit">Create it!</button>
        </form>
        {this.state.created ? <CreateCardForm quiz={this.state.quizID}/>: <div></div>}
        </div>
      </div>
    );
  }
}

export default QuizCreateForm;
