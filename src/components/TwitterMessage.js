import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input  type="text" value={this.state.message} onChange={this.handleMessage}/>
        <h4>{this.props.maxChars - this.state.message.length}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
