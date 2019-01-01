import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Finish Redux'},
      {id: 2, content: 'Start searching for jobs'}
    ]
  }
  addTodo = todo => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  removeTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div id="todo-app">
        <h1>Todo List</h1>
        <Todos todos={this.state.todos} removeTodo={this.removeTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
