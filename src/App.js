import React, { Component } from "react";
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentToDo: "",
    };
    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)
  }
  handleChange = (event) => {
    this.setState({
      currentToDo: event.target.value,
    });
  };
  addItem = (event) => {
    event.preventDefault();
    console.log("addItem Method fired!");
    this.setState(prevState => {
      const updatedTodos = prevState.todos.concat(this.state.currentToDo)
      return {
        todos: updatedTodos,
        currentToDo: ''
      }
    })
  };
  render() {
    const todoListElements = this.state.todos.map(td => <li key={this.state.todos.indexOf(td)}>{td}</li>)
    return (
      <div className="container">
        <form onSubmit={this.addItem}>
          <label htmlFor="taskname">Task Name:</label>
          <input
            onChange={this.handleChange}
            name="taskName"
            type="text"
            value = {this.state.currentToDo}
            placeholder="Add todo here!"
          ></input>
          <button type="submit">Add Task</button>
          {/* <p>{this.state.handleChange}</p> */}
        </form>
        <ul>
          {todoListElements}
        </ul>
      </div>
    );
  }
}
export default TodoList;