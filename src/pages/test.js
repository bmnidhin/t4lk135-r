import React, { Component } from "react";


class test extends Component {
  state={
    car : "audi"
  }
  render() {
    return (
      <>
        <h1>Test Component</h1>
    <p>Car === {this.state.car}</p>
      </>
    );
  }
}

export default test;
