import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import image from "./image.jpg";
import "../App.css";
class Login extends Component {
  state = {
    client_id: "54df4a79d0d312b94fe0",
    client_secret: "8deeb067b71610453845aa0cdd3100873d121474",
    gistName: [],
    description:"",
    name:"",
    content:"",
  };
  componentDidMount() {
    axios
      .get(
        `https://api.github.com/users/98ritu/gists?client_id=${this.state.client_id}&client_secret=${this.state.client_secret}`
      )
      .then((response) => {
        this.setState({ gistName: response.data });
      });
  }
  OnChangeHandlerOne=(e)=>{
      e.preventDefault();
      this.setState({description:e.target.value});
  }
  OnChangeHandlerTwo=(e)=>{
    e.preventDefault();
    this.setState({name:e.target.value});
}
OnChangeHandlerThree=(e)=>{
  e.preventDefault();
  this.setState({content:e.target.value});
}
OnSubmitHandler=(e)=>{
  this.setState({name:''});
  this.setState({description:''});
  this.setState({content:''});
  const key=this.state.name;
  e.preventDefault();
  const gist={
    description:this.state.description,
    public: true,
    files: {
     [key]: {
        content: this.state.content,
      }
  }
}
axios.post(`https://api.github.com/gists?access_token=29a82b4d8fdd9ce61693b816f521e2aaa4052f9d`,gist)
.then((response)=>{
  console.log(response);
  window.alert("Gist Created Successfullyy");
  this.props.history.push('/gists');
});
}
  render() {
    let gists = "";
    gists = this.state.gistName.map((gist) => {
      return (
        <div>
          <li className="nav-item">
            <NavLink
              to={"/" + gist.id}
              className="nav-link"
              style={{ color: "blue" }}
            >
              {Object.keys(gist.files)}{" "}
            </NavLink>
          </li>
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
        <section style={{ marginTop: "20vh" }}>
          <div className="container">
            <div className="row  bg-light">
              <div className="col">
                <ul className="nav ">
                  <li className="nav-item">
                    <NavLink
                      to="/gists"
                      exact
                      className="nav-link"
                      style={{ color: "blue" }}
                    >
                      View Your Gists
                    </NavLink>
                  </li>
                  {gists}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="m-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="card border-0">
                  <div className="card-body">
                    <form onSubmit={this.OnSubmitHandler}>
                      <div className="form-group">
                        <input
                          type="text
                "
                          className="form-control bg-light"
                          placeholder="Gist Description..." onChange={this.OnChangeHandlerOne}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="
                "
                          className="form-control bg-light py-3"
                          placeholder="Filename including Extension"
                          onChange={this.OnChangeHandlerTwo}
                        />

                        <textarea
                          cols="30"
                          rows="10"
                          className="form-control"
                          onChange={this.OnChangeHandlerThree}
                        ></textarea>
                        <input
                          type="submit"
                          value="Create Gist"
                          className="float-right mt-2 btn btn-success text-white"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
