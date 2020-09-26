import React, { Component } from "react";
import Header from "./Header/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [],
  };
  addTodo = (title) => {
    const newTodo = {
      title: title,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
