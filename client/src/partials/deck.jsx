import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class Deck extends Component {

  render() {
    return (
      <div className="deck">
        <h1>{this.props.deck.name}</h1>
        <p>Lorem Ipsum</p>
        <button>Details</button>
        <button><Link to={"/decks/" + this.props.deck.id}>Let's Study!</Link></button>
      </div>
    );
  }
}

export default Deck;
