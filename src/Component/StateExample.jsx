import React, { Component, Fragment } from "react";
class StateExample extends Component {
  state = {
    name: "abdulla",
    age: 24,
    company: "hello world lab",
  };
  //   {}-interpolation syntax in react
  render() {
    return (
      <Fragment>
        <h1>Hey myname is {this.state.name}</h1>
        <p>age {this.state.age}</p>
        <p>Work at {this.state.company}</p>
      </Fragment>
    );
  }
}

export default StateExample;
