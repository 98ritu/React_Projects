import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
  };
  onChange = (e) => this.setState({ title: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className=" form-group w-100 text-center">
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              className="form-control pb-2 m-2"
              placeholder="Add Todo.."
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-primary text-white float-none"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
