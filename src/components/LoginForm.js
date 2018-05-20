import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput= (event) => {
      const { name, value } = event.target;

        this.setState({
          [name]: value,
        });
  }

  handleSubmit= (event) => {
      event.preventDefault()
      
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username"
                value={this.state.username}
                onChange={this.handleInput}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password"
                value={this.state.password}
                onChange={this.handleInput}

              />
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
