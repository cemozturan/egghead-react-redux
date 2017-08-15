import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = [
  {id: 1, text: 'Create static UI', completed: true},
  {id: 2, text: 'Initialise state', completed: true},
  {id: 3, text: 'Render based on state', completed: false}
];

ReactDOM.render(
  <App todos={state}/>,
  document.getElementById('root'));
registerServiceWorker();
