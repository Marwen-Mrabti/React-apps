import React, { useState } from 'react';

function Search({ getQuery }) {
  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
    getQuery(event.target.value);
  };

  return (
    <div className="search">
      <form>
        <input
          type="text"
          value={text}
          className="form-control"
          placeholder="search.."
          autoFocus
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default Search;
