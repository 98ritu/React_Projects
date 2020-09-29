import React, { Component } from "react";
import Welcome from "./Welcome";

class Form extends Component {
  state = {
    username: "",
    password: "",
    flag: false,
  };
  onChangeName = (e) => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  };

  onChangePass = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.username === "username" && this.state.password === "pass") {
      console.log(this.state.username);
      console.log(this.state.password);
      this.setState({ flag: true });
    } else {
      alert("only username and pass are considered valid");
    }
  };

  render() {
    let welcome = null;
    if (this.state.flag === true) {
      welcome = (
        <div>
          <Welcome username={this.state.username} />
        </div>
      );
    } else {
      welcome = (
        <div className="card mt-5">
          <div className="card-header">
            <h1 className="display-4">Login</h1>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Username"
                    onChange={this.onChangeName}
                  />
                  <input
                    type="password"
                    className="form-control mb-5"
                    placeholder="Password"
                    onChange={this.onChangePass}
                  />
                  <input
                    type="submit"
                    value="Login"
                    className="form-control btn btn-primary text-white"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }

    return <div>{welcome}</div>;
  }
}

export default Form;
