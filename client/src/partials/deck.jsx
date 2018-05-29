import React, { Component } from 'react';
import '../App.css';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class Deck extends Component {

  render() {
    return (
      <div className="deck">
        <h1>{this.props.name}</h1>
        <p>Lorem Ipsum</p>
        <button>Details</button>
        <button>Let's Study!</button>
      </div>
    );
  }
}

export default Deck;
