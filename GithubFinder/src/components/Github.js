import React, { Component } from "react";
import axios from "axios";

class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client_id: "54df4a79d0d312b94fe0",
      client_secret: "8deeb067b71610453845aa0cdd3100873d121474",
      repos_count: 5,
      repos_sort: "created:asc",
      user: "",
      profile: "",
      data: [],
    };
  }

  onChangeHandler = (e) => {
    e.preventDefault();
    this.setState({ user: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        "https://api.github.com/users/" +
          this.state.user +
          "?client_id=" +
          this.state.client_id +
          "&client_secret=" +
          this.state.client_secret
      )
      .then((response) => {
        this.setState({ data: response.data });
        console.log(response.data);
        console.log(this.state.data.avatar_url);
      });
  };
  render() {
    let form = null;
    if (this.state.data.length !== 0) {
      form = (
        <div className="card">
          <div className="card-header">
            <h1 className="display-4">Profile</h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img
                  className="img-fluid"
                  src={this.state.data.avatar_url}
                ></img>
              </div>
              <div className="col-md-8">
                <ul className="list-group">
                  <li className="list-group-item">
                    Login:{this.state.data.login}
                  </li>
                  <li className="list-group-item">Id:{this.state.data.id}</li>
                  <li className="list-group-item">
                    Email:{this.state.data.email}
                  </li>
                  <li className="list-group-item">Bio:{this.state.data.bio}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <form onSubmit={this.onSubmit} className="mb-5">
          <div className="form-group">
            <input
              type="text"
              className="form-control mt-5"
              placeholder="EnterName"
              onChange={this.onChangeHandler}
            />
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary mt-2"
            />
          </div>
        </form>
        {form}
      </div>
    );
  }
}

export default Github;
