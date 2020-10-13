import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Gist from "super-react-gist";
import axios from "axios";
import image from "./image.jpg";
import "../App.css";
class Gists extends Component {
  state = {
    client_id: "54df4a79d0d312b94fe0",
    client_secret: "8deeb067b71610453845aa0cdd3100873d121474",

    gists: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://api.github.com/users/98ritu/gists?client_id=${this.state.client_id}&client_secret=${this.state.client_secret}`
      )
      .then((response) => {
        this.setState({ gists: response.data });
        console.log(Object.keys(this.state.gists[0].files));
      });
  }
  render() {
    let gists = "";
    gists = this.state.gists.map((gist) => {
      return (
        <div>
          <p className="text-primary">{Object.keys(gist.files)}</p>
          <Gist className="m-5" url={gist.html_url} />
        </div>
      );
    });

    return (
      <div>
        <nav
          className="navbar fixed-top mb-5"
          style={{ backgroundColor: "black" }}
        >
          <div className="container">
            <NavLink
              to="#"
              className="navbar-brand font-weight-bold"
              style={{ color: "white" }}
            >
              GitHub Gist
            </NavLink>
            <ul className="nav text-white ">
              <li className="nav-item">
                <NavLink
                  to="/gists"
                  exact
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  All Gists
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/"
                  exact
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Back To Github
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to=""
                  exact
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Log out
                </NavLink>
              </li>
              <li className="nav-item">
                <img src={image} className="image" />
              </li>
            </ul>
          </div>
        </nav>
        <h1 className="text-center border-bottom" style={{ marginTop: "10vh" }}>
          All Gists
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="card">
                <div className="card-body">{gists}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gists;
