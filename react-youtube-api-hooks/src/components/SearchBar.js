import React, { useState } from 'react';

function SearchBar({ onSearchCallback }) {
  const [userInput, setUserInput] = useState('');

  const handleOnSearch = (event) => {
    event.preventDefault();
    onSearchCallback(userInput);
  };

  return (
    <form className="search-input" onSubmit={handleOnSearch}>
      <input
        id="search"
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
    </form>
  );
}

export default SearchBar;
