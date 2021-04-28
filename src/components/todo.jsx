import React, { Component } from "react";

class TodoApp extends Component {
  state = {
    todoText: "",
    todoList: [],
  };

  render() {
    return (
      <div className="todo-page">
        <div className="todo-form">
          <h6>Todo App</h6>
          <input
            value={this.state.todoText}
            onChange={this.onTextChange}
            placeholder="ToDo text"
            type="text"
          />
          <button onClick={this.addTodo}>Add</button>
        </div>

        <div className="todo-list">
          <h6>Pending ToDos</h6>
          <p>You have {this.state.todoList.length} pending ToDos.</p>
        </div>
      </div>
    );
  }

  onTextChange = (event) => {
    this.setState({ todoText: event.target.value });
  };

  addTodo = () => {
    var copy = this.state.todoList;
    copy.push(this.state.todoText); // not recommended

    this.setState({ todoList: copy, todoText: "" });
  };
}

export default TodoApp;

/**
 *
 * - create an array on the state
 * - push the text to the array (click on button)
 * - display the list of todos from the array in the render method (h5 for each todo)
 *
 */
