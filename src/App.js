import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="todo-app">
          <TodoForm currentTodo={this.props.currentTodo} changeCurrent={this.props.changeCurrent}/>
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;
const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;
