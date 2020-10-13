import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

class Home extends Component {
  onClickHandler = (e) => {
    e.preventDefault();
    this.props.history.push("/login");
  };
  render() {
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
              <span style={{ color: "white" }}>
                <i className="fa fa-github fa-2x pl-2" aria-hidden="true"></i>{" "}
              </span>
            </NavLink>
            <ul className="nav ml-auto text-white ">
              <li className="nav-item">
                <NavLink
                  to="/login"
                  exact
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <section className="bg-dark text-white" style={{ height: "100vh" }}>
          <h1
            className="text-white text-center font-weight-bold "
            style={{ paddingTop: "30vh" }}
          >
            Built for Developers
          </h1>
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <p
                className=" text-white  text-center"
                style={{ fontSize: "1.5rem" }}
              >
                GitHub is a development platform inspired by the way you work.
                From open source to business, you can host and review code,
                manage projects, and build software alongside 50 million
                developers.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <input
                type="button"
                value="Sign in"
                className="text-white btn border btn-success mt-4 px-4"
                onClick={this.onClickHandler}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
