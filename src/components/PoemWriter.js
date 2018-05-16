import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      error: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    }, ( () => {this.validatePoem(this.state.value)} ))
  }

  validatePoem = (poem) => {
    let valid = false;
    const lines = poem.split("\n");

    if (lines.length === 3) {
      const firstLine = lines[0].split(' ');
      const secondLine = lines[1].split(' ');
      const thirdLine = lines[2].split(' ');

      (firstLine.length === 5 && secondLine.length === 3 && thirdLine.length === 5) ? valid = true : valid = false
    }

    if (valid) {
      this.setState({
        error: false,
      })
    } else {
      this.setState({
        error: true,
      })
    }
  }

  render() {
    const divStyle = {
      display: (this.state.error ? 'block' : 'none'),
      color: "red"
    }
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange} />
        <div id="poem-validation-error" style={ divStyle }>
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
