// react hooks
import React, { useState } from 'react';
//local components
import Todo from './components/Todo/Todo';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  // handle callbacks
  const handleCallbackTodo = (todo) => {
    todo.text&&setTodos([...todos, todo]);
  };

  const handleEditCallback = (editID) => {
    let newTodos = todos.map((todo, index) => {
      if (index === editID) {
        todo.text = prompt('Please enter the new Task', todo.text);
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDeleteCallback = (deleteID) => {
    let newTodos = todos.filter((todo, index) => index !== deleteID && todo);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>my Todo</h1>
      </div>
      <Todo callbackTodo={handleCallbackTodo} />
      <TodoList
        todos={todos}
        editCallback={handleEditCallback}
        deleteCallback={handleDeleteCallback}
      />
    </div>
  );
}

export default App;
