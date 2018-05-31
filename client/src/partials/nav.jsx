import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-container">
          <div>
            <div className="nav-container-obj"><Link to="/profile">A</Link></div>
            <div className="nav-container-obj">B</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
