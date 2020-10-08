import React, { Component } from "react";
import Github from "./components/Github";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 text-center">Github Finder</h1>
        <Github />
      </div>
    );
  }
}

export default App;
