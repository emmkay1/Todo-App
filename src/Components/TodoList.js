import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "../Styles/TodoList.css";

class TodoList extends Component {
  state = { todos: [] };

  addTodo = (todo) => {
    let newTodo = { ...todo, id: uuidv4() };
    this.setState((st) => ({
      todos: [...st.todos, newTodo]
    }));
  };

  editTodo = (id, todo) => {
    let edited = this.state.todos.map((e) => {
      if (e.id === id) e.todo = todo;
      return e;
    });

    this.setState({ todos: edited });
  };

  deleteTodo = (id) => {
    let filtered = this.state.todos.filter((e) => e.id !== id);
    this.setState({ todos: filtered });
  };

  displayTodos() {
    return this.state.todos.map((e) => (
      <Todo
        key={e.id}
        id={e.id}
        todo={e.todo}
        deleteTodo={this.deleteTodo}
        editTodo={this.editTodo}
      />
    ));
  }

  render() {
    return (
      <div className="TodoList">
        <h1>
          TodoEase!<span className="sub-header">A Minimal To-Do List App</span>
        </h1>
        <NewTodoForm addTodo={this.addTodo} />
        {this.displayTodos()}
      </div>
    );
  }
}

export default TodoList;
