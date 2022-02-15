import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';


const Todo = ({ callbackTodo }) => {
  const [todo, setTodo] = useState('');

  const handleInput = (event) => {
    setTodo(event.target.value);
  };
  const handleAdd = () => {
    callbackTodo({ text: todo });
    setTodo('');
  };

  return (
    <div className="todo">
      <input
        className="input"
        type="text"
        placeholder="what are your plans"
        value={todo}
        onChange={handleInput}
      />

      <button className="btn btn-add" onClick={handleAdd}>
        <FaPlusCircle/>
      </button>
    </div>
  );
};

export default Todo;
