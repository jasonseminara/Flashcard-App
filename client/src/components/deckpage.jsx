import React, { Component } from 'react';
import '../App.css';

import Deck from '../partials/deck';
import { getDecks } from '../services/apiservice';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class DeckPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      decks: [],
      decksLoaded: false
    }
  }

  componentDidMount() {
    getDecks()
    .then(data =>
      this.setState({
        decks: data,
        decksLoaded: true
      }));
  }

  renderDecks() {
    if(this.state.decksLoaded) {
      console.log(this.state.decks)
      return (this.state.decks.map((deck) => {
        return (
          <Deck
          deck={deck}
          key={deck.id}/>
        )
        }))
      } else {
      return (<h1>Loading</h1>)
    }
  }

  render() {
    // main container for the main view on the page
    // container for login/signup components
    return (
      <div className="deck-page">
        <div className='deck-page-container'>
        { this.renderDecks() }
        </div>
      </div>
    );
  }
}

export default DeckPage;
