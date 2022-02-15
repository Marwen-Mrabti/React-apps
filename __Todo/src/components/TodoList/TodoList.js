import React from 'react';

import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';

const TodoList = ({ todos, editCallback, deleteCallback }) => {

  return (
    <div className={`todo-list ${!todos.length&& 'hidden'}`}>
      {todos.map((todo, index) => {
        return (
          <div key={index} className="todo-item">
            <h1 className="todo-text">{todo.text}</h1>
            <button
              className="btn btn-edit"
              onClick={() => editCallback(index)}
            >
              <FaRegEdit />
            </button>
            <button
              className="btn btn-delete"
              onClick={() => deleteCallback(index)}
            >
              <FaTrashAlt />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
