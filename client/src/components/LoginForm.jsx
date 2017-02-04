import React from 'react';
import classnames from 'classnames'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      errors: {}
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.userLoginRequest(this.state).then(
      () => {},
      (err) => this.setState({ errors: err.response.data, isLoading: false })
    );
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h1>Login</h1>

        <div className={classnames("form-group", { 'has-error': errors.username })}>
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange.bind(this)}
            type="text"
            name="username"
            className="form-control"
            />
          {errors.username && <span className="help-block">{errors.username}</span>} // video 7 should work
        </div>

        <div className={classnames("form-group", { 'has-error': errors.password })}>
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange.bind(this)}
            type="password"
            name="password"
            className="form-control"
            />
          {errors.password && <span className="help-block">{errors.password}</span>}
        </div>

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn-class btn-primary btn-lg">Login</button>
        </div>

      </form>
    );
  }
}

LoginForm.propTypes = {
  userLoginRequest: React.PropTypes.func.isRequired
}

export default LoginForm;
