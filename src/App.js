import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="todo-app">
          <div>
            <form>
              <input type="text" />
            </form>
          </div>
          <div className="todo-list">
            <ul>
              {this.props.todos.map(todo => {
                return (
                  <li key={todo.id}>
                    <input type="checkbox" defaultChecked={todo.completed} />
                    {todo.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
