import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


class LandingPage extends Component {
  render() {
      return (
        <div className="landing-page">
        <div className='landing-page-container'>
          <h1>Welcome to my Flash Card App</h1>
            <button name="register"><Link to="/register">Register</Link></button>
            <button name="login"><Link to="/login">Login</Link></button>
        </div>
      </div>
      );
    }
}

export default LandingPage;
