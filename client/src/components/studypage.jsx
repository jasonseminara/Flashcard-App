import React, { Component } from 'react';
import '../App.css';

import Deck from '../partials/deck';
import { getOneDeck } from '../services/apiservice';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class StudyPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      deck: [],
      deckLoaded: false
    }
  }

  componentDidMount() {
    const deckId = this.props.match.params.id;
    getOneDeck(deckId)
    .then(data =>
      this.setState({
        deck: data,
        deckLoaded: true
      }));
  }

  render() {
    // main container for the main view on the page
    // container for login/signup components
    return (
      <div className="study-page">
        <div className='study-page-container'>
          <h1>study Page</h1>
          <h2>{this.state.deck.name}</h2>
        </div>
      </div>
    );
  }
}

export default StudyPage;
