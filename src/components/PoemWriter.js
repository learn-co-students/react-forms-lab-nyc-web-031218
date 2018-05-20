import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      isValid: true
    };
  }

  error = () => {
    if(!this.state.isValid){
      return (
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      )
    }
  }
  isValid = (text) => {
    const poem = text.split("\n").map(p => p.trim())
    if (poem.length === 3){
      const line1 = poem[0].split(" ").length === 5;
      const line2 = poem[1].split(" ").length === 3;
      const line3 = poem[2].split(" ").length === 5;
      if(line1 && line2 && line3){
        return true
      }
    }
    return false
  }
  handleText = (e) => {

    this.setState({
      text: e.target.value,
      isValid: this.isValid(e.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.text}
          onChange={this.handleText}/>
        {this.error()}
      </div>
    );
  }
}

export default PoemWriter;
