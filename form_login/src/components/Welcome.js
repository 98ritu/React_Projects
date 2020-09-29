import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const username = this.props.username;
    return (
      <div>
        <p>Welcome You are Successfully logged in,{username}!</p>
      </div>
    );
  }
}

export default Welcome;
