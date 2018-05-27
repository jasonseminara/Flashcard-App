import React, { Component } from 'react';
import './App.css';

import Nav from './partials/nav';
import LandingPage from './components/landingpage';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor () {
    super();
    // this.state = {
    //   decks: []
    // }
  }
  // componentDidMount() {
  //   fetch(`${BASE_URL}/decks`)
  //   .then(resp => resp.json())
  //   .then(data => this.setState({
  //     decks: data.decks
  //   }));
  // }
  render() {
    return (

      <div className="App">
      <Nav />
      <LandingPage />
        {/* <div>{JSON.stringify(this.state.decks)}</div> */}
      </div>
    );
  }
}

export default App;
