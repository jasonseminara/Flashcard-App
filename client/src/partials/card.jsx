import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      studied: false
    }
  }

  render() {
    return (
      <div>
        <li>{this.props.question}</li>
        <li>{this.props.answer}</li>
      </div>
    );
  }
}

export default Card;
