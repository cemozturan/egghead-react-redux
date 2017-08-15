import React from 'react';

const TodoItem = ({completed, text}) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={completed} />
      {text}
    </li>
  );
}

export default function TodoList(props) {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map(todo => <TodoItem  key={todo.id} {...todo} />)}
      </ul>
    </div>
  );
}
