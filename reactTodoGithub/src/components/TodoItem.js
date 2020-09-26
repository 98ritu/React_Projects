import React, { Component } from "react";
import Todos from "./Todos";

export class TodoItem extends Component {
  render() {
    const { id, title } = this.props.todo;
    return (
      <div>
        <p className="text-center bg-dark text-white">
          <span>{title}</span>
        </p>
      </div>
    );
  }
}

export default TodoItem;
