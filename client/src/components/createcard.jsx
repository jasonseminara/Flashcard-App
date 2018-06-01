import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// import Quiz from '../partials/deck';
import { createQuestion } from '../services/apiservice';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class CreateCardForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      q_value: '',
      a_value: '',
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
    createQuestion(this.state, this.props.quiz);
    this.setState({
      q_value:'',
      a_value:'',
      created: true
    })
  }
  render() {
    return (
      <div className="question-form">
        <div className='question-form-container'>
          <h1>Let's create a Question!</h1>
          <form onSubmit={this.handleSubmit}>
          <label htmlFor="q_value"> Name of question: </label>
            <input type="text" name="q_value" value={this.state.q_value} onChange={this.handleChange}placeholder="Quiz Name" ></input>
          <label htmlFor="a_value"> description: </label>
            <input type="text" name="a_value" value={this.state.a_value} onChange={this.handleChange}placeholder="Description" ></input>
            <button value="submit">Create it!</button>
        </form>
        <div className="questions-container">

        </div>
        </div>
      </div>
    );
  }
}

export default CreateCardForm;
