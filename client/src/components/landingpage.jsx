import React, { Component } from 'react';
import '../App.css';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class LandingPage extends Component {
  constructor () {
    super();

  }
  render() {
    // main container for the main view on the page
    // container for login/signup components
    return (
      <div className="landing-page">
        <div className='landing-page-container'>

        </div>
      </div>
    );
  }
}

export default LandingPage;
