import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      studied: false
    }
  }

  render() {
    return (
      <div>
        <li>{this.props.question.q_value}</li>
        <li>{this.props.question.a_value}</li>
      </div>
    );
  }
}

export default Question;
