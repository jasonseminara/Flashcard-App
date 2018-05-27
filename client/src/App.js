import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class App extends Component {
  constructor () {
    super();
    this.state = {
      decks: []
    }
  }
  componentDidMount() {
    fetch(`${BASE_URL}/decks`)
    .then(resp => resp.json())
    .then(data => this.setState({
      decks: data.decks
    }));
  }
  render() {
    return (
      <div className="App">
        <h1>yo mama</h1>
        <div>{JSON.stringify(this.state.decks)}</div>
      </div>
    );
  }
}

export default App;
