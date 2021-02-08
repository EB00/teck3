import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

export default class Nav extends React.Component {
  render() {    
    return (
      <nav className="Nav">
        <div id="navbar">
        <div id="myNav">
          <Link className="link" to="/login.js">Login</Link>
          <Link className="link" to="/">Home</Link>
          <div id="navbar-right">
              <a href="help.html">Help</a>
          </div>
      </div>
      </div>
      </nav>
    );
  }
}
