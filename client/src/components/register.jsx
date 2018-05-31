import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class Register extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      registered: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]:e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    console.log(this.props.onSubmit);
    this.props.onSubmit(this.state);
    this.setState({
      email:'',
      password:'',
      registered: true
    })
  }

  render() {
    // main container for the main view on the page
    // container for login/signup components
    return (

      <div className="register-page">
      {this.state.registered && <Redirect to='/login' />}
        <h1>Register </h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email"> Email: </label>
            <input type="text" name="email" value={this.state.username} onChange={this.handleChange}placeholder="User Name" ></input>
          <label htmlFor="password"> Password: </label>
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange}placeholder="Password" ></input>
            <button value="login">Log In </button>
        </form>

      </div>
    );
  }
}

export default Register;
