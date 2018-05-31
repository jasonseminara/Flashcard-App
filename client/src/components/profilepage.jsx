import React, { Component } from 'react';
import '../App.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class ProfilePage extends Component {
  constructor (props) {
    super(props);

  }

  render() {

    return (
      <div className="profile-page">
        <div className='profile-page-container'>
          <h1>Profile Page </h1>
            <ul>

            </ul>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
