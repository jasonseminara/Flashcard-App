import React, { Component } from 'react';
import '../App.css';
import { Link, Route } from 'react-router-dom';
import LogIn from '../components/login.jsx';
import Register from '../components/register.jsx';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class LandingPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      register: false,
      login: false,
      enter: false
    }
    this.handleEntry = this.handleEntry.bind(this);
  }
  handleLogin(user) {
    console.log(user);
  }
  handleEntry(e) {
    e.preventDefault();
    const {name, value} = e.target;
    console.log(e.target);
    this.setState(prevState => ({
      [name]: !this.state[name],
      enter: !this.state.enter
    }))
  }
  render() {
    // main container for the main view on the page
    // container for login/signup components
    // if (this.state.enter === false) {
      return (
        <div className="landing-page">
        <div className='landing-page-container'>
          <h1>Welcome to my Flash Card App</h1>
            <button name="register" onClick={this.handleEntry}><Link to="/register">Register</Link></button>
            <button name="login" onClick={this.handleEntry}><Link to="/login">Login</Link></button>
        </div>
      </div>
      );
    }
}

export default LandingPage;
