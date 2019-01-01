import React from 'react';

const Todos = ({todos, removeTodo}) => {
  const todosList = <ul>
    {
      todos.map(todo => (
        <li key={todo.id}>
          {todo.content}
          <button type="button" onClick={() => removeTodo(todo.id)}>⤬</button>
        </li>
      ))
    }
  </ul>
  const noTodosMsg = <p>There are no todos!</p>;

  return (
    <React.Fragment>
      {
        todos.length ?
        todosList :
        noTodosMsg
      }
    </React.Fragment>
  );
}

export default Todos;