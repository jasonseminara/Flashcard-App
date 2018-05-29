import React, { Component } from 'react';
import '../App.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class ProfilePage extends Component {
  constructor () {
    super();

  }
  render() {
    // main container for the main view on the page
    // container for login/signup components
    return (
      <div className="profile-page">
        <div className='profile-page-container'>
          <h1>Profile Page </h1>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
