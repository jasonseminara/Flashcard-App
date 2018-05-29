import React, { Component } from 'react';
import '../App.css';

import Deck from '../partials/deck';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class StudyPage extends Component {
  constructor () {
    super();
  }

  render() {
    // main container for the main view on the page
    // container for login/signup components
    return (
      <div className="study-page">
        <div className='study-page-container'>
          <h1>study Page</h1>
        </div>
      </div>
    );
  }
}

export default StudyPage;
