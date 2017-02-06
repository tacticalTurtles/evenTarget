import React from 'react';
import SigninForm from './SigninForm.jsx'

class Signin extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SigninForm />
        </div>
      </div>
    )
  }
}

export default Signin;