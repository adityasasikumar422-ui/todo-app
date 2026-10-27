import React, { Component } from 'react'

export default class ToDoApp extends Component {
  render() {
    return (
      <div className="todo-container">
        <h1>Todo App</h1>

        <div className="input-section">
            <input type="text" />
            <button>Add</button>
        </div>
    </div>
    );
  }
}
