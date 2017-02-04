import React from 'react';
import LoginForm from './LoginForm.jsx'
import { connect } from 'react-redux';
import { userLoginRequest } from '../redux/actions/loginActions';

class Login extends React.Component {
  render () {
    const { userLoginRequest } = this.props;
    return (
      <LoginForm userLoginRequest={userLoginRequest} />
    );
  }
}

Login.propTypes = {
  userLoginRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userLoginRequest })(Login);
