import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      usernameValue: '',
      passwordValue: ''
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      usernameValue: event.target.value
    })
  }

  handlePasswordChange = (event) => {

    this.setState({
      passwordValue: event.target.value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()


    // this.props.onSubmit({this.state.usernameValue, this.state.passwordValue})

    const username = this.state.usernameValue
    const password = this.state.passwordValue

    if(username && password){

      this.props.onSubmit({username,password})
    }


  }
  // const login = ({ username, password }) => {
  //   console.log(`Logging in ${username} with password ${password}`);
  // };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.usernameValue} onChange={this.handleUsernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.passwordValue} onChange={this.handlePasswordChange}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;


// Open the components/LoginForm.js file.
// This component takes one prop, onSubmit, which is a function that gets called when the form is being submitted.
// You'll find two inputs in this component: <input type="text"> and <input type="password">. Make this a controlled component by adding the necessary props to these inputs. Their values should be saved in the component's state.
// An example of an input would look like: js <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
// Remember that you can retrieve the inpiut name and value of an event.target from the JS event.
// Add the necessary event handler to the <form> element in order to call the onSubmit callback prop.
// The onSubmit callback prop should only be called if both fields are filled in (with any value).
