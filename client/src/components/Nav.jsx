import React from 'react';
import {showBookmarks, showHome} from '../redux/actions/appActions.js'

var Nav = ({showBookmarks, showHome}) => (
  <nav className="navbar">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">JAMBA</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#" onClick={showHome}><span className="glyphicon glyphicon-home"></span></a></li>
        <li><a href="#" onClick={showBookmarks}><span className="glyphicon glyphicon-bookmark"></span></a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </nav>
);

export default Nav;
