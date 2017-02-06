import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/authActions.js';

class Nav extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { showBookmarks, showHome } = this.props;
    const { isAuthenticated } = this.props.auth;
    
    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={this.logout.bind(this)}><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
        <li><Link to="/signin"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
      </ul>
    )

    const userBookmarks = (
      <ul className="nav navbar-nav">
        <li className="active"><Link to="/"><span className="glyphicon glyphicon-home"></span></Link></li>
        <li><a href="#" onClick={showBookmarks}><span className="glyphicon glyphicon-bookmark"></span></a></li>
      </ul>
    );

    const guestBookmarks = (
      <ul className="nav navbar-nav">
        <li className="active"><Link to="/"><span className="glyphicon glyphicon-home"></span></Link></li>
      </ul>
    );

    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">JAMBA</Link>
          </div>
            { isAuthenticated ? userBookmarks : guestBookmarks }
          <div className="collapse navbar-collapse">
            { isAuthenticated ? userLinks : guestLinks }
          </div>
        </div>
      </nav>

    )
  }
}

Nav.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logout })(Nav);
