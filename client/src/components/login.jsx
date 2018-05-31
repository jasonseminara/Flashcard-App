import React, { Component } from 'react';
import '../App.css';
import {Redirect} from 'react-router-dom';

class LogIn extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedIn: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      email:'',
      password:'',
      loggedIn: true
    })
  }

  render() {
    return (
      <div className="login-page">
        {this.state.loggedIn && <Redirect to='/decks'/>}
        <h1>Log In </h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email"> Email: </label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange}placeholder="User Name" ></input>
          <label htmlFor="password"> Password: </label>
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange}placeholder="Password" ></input>
            <button value="login">Log In </button>
        </form>
      </div>
    );
  }
}

export default LogIn;
