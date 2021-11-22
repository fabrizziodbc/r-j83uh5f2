import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      contador: 0,
    };
    this.OnWriteHandle = this.OnWriteHandle.bind(this);
  }
  OnWriteHandle = (event) => {
    console.log("value: ", this.state.value);
    console.log("contador: ", this.state.contador);

    this.setState({
      value: event.target.value,
    });
    this.setState({
      contador: event.target.value.length,
    });
  };
  render() {
    return (
      <div className="container">
        <textarea
          rows="3"
          onChange={this.OnWriteHandle}
          value={this.state.value}
        ></textarea>
        <div className="counter">{this.state.contador}</div>
      </div>
    );
  }
}

export default App;
