import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.userSignupRequest(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h1>Join</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange.bind(this)}
            type="text"
            name="username"
            className="form-control"
            />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange.bind(this)}
            type="password"
            name="password"
            className="form-control"
            />
        </div>

        <div className="form-group">
          <label className="control-label">Confirm Password</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange.bind(this)}
            type="password"
            name="passwordConfirmation"
            className="form-control"
            />
        </div>

        <div className="form-group">
          <button className="btn-class btn-primary btn-lg">SignUp</button>
        </div>

      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;
