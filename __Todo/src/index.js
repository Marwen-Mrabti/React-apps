import React from 'react';
import ReactDOM from 'react-dom';

// styles
import './index.css';
import './components/TodoList/TodoList.css'
import './components/Todo/Todo.css';

//import the App component
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
