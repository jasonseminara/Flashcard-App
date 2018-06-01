import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class Quiz extends Component {

  render() {
    return (
      <div className="quiz">
        <h1>{this.props.quiz.name}</h1>
        <p>{this.props.quiz.description}</p>
        <button>Details</button>
        <button><Link to={"/quiz/" + this.props.quiz.id}>Let's Study!</Link></button>
      </div>
    );
  }
}

export default Quiz;
