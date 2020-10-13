import React, { Component } from "react";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import { Route, NavLink } from "react-router-dom";
import Login from "./components/Login";
import Gists from "./components/Gists";
import ShowGist from "./components/ShowGist";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/gists" exact component={Gists} />
          <Route path="/:id" exact component={ShowGist} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
