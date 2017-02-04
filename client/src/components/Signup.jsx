import React from 'react';
import SignupForm from './SignupForm.jsx'
import { connect } from 'react-redux';
import { userSignupRequest } from '../redux/actions/signUpActions';

class Signup extends React.Component {
  render () {
    const { userSignupRequest } = this.props;
    return (
      <SignupForm userSignupRequest={userSignupRequest} />
    );
  }
}

Signup.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(Signup);
