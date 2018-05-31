import React, { Component } from 'react';
import '../App.css';
import Card from '../partials/card';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class StudyPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      deck: [],
      cardsLoaded: false
    }
    this.getDeckRelatedInformation = this.getDeckRelatedInformation.bind(this);
  }
  getDeckRelatedInformation() {
    const deckId = this.props.match.params.id;
    const jwt = localStorage.getItem("jwt")
    const init = {
      headers: {"Authorization": `Bearer ${jwt}`}
    }
    fetch(`${BASE_URL}/api/decks/${deckId}`, init)
    .then(res => res.json())
    .then(data =>
      this.setState({
        deck: data,
        cardsLoaded: true
      }))
    .catch(err => err);
  }


  componentDidMount() {
    this.getDeckRelatedInformation()
  }

  renderCards() {
    if(this.state.cardsLoaded) {
      console.log(this.state.deck)
      return (this.state.deck.map((card) => {
        return (
          <Card
          question={card.q_value}
          answer={card.a_value}
          key={card.id} />
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
      <div className="study-page">
        <div className='study-page-container'>
          <h1>study Page</h1>
          <h2>{ this.state.cardsLoaded && this.state.deck[0].name }</h2>
          <ul>
            {this.renderCards()}
          </ul>
        </div>
      </div>
    );
  }
}

export default StudyPage;
