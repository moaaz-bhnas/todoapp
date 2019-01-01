import React, { Component } from 'react';

class AddTodo extends Component {
  state = { 
    content: ''
  }
  handleChange = e => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  } 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo">Add todo:</label>
        <input type="text" id="todo" onChange={this.handleChange} value={this.state.content}/>
      </form>
    );
  }
}

export default AddTodo;