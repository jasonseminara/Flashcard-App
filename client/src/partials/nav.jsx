import React, { Component } from 'react';
import '../App.css';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class Nav extends Component {
  // constructor () {
  //   super();
  //   this.state = {
  //     decks: []
  //   }
  // }
  // componentDidMount() {
  //   fetch(`${BASE_URL}/decks`)
  //   .then(resp => resp.json())
  //   .then(data => this.setState({
  //     decks: data.decks
  //   }));
  // }
  render() {
    return (
      <div className="nav">
        <div className="nav-container">
          <div>
            <div className="nav-container-obj">A</div>
            <div className="nav-container-obj">B</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
