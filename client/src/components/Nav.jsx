import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  constructor({showBookmarks, showHome}) {
    super();
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">JAMBA</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#" onClick={this.showHome}><span className="glyphicon glyphicon-home"></span></a></li>
            <li><a href="#" onClick={this.showBookmarks}><span className="glyphicon glyphicon-bookmark"></span></a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span></Link></li>
            <li><Link to="/signup"><span className="glyphicon glyphicon-plus"></span></Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
