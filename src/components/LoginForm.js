import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChangeUserName = (e) => {
    this.setState({
      username: e.target.value,
    })
  }

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.onSubmit(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleChangeUserName} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleChangePassword} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
