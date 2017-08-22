import React from 'react';
import { connect } from 'react-redux';

const TodoItem = ({completed, text}) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={completed} />
      {text}
    </li>
  );
}

const TodoList = (props) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map(todo => <TodoItem  key={todo.id} {...todo} />)}
      </ul>
    </div>
  );
}

export default connect(
  (state) => ({todos: state.todos})
)(TodoList);
