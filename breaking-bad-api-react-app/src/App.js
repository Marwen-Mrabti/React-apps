// react and react hooks
import React, { useState, useEffect } from 'react';
//data fetching api axios
import axios from 'axios';
//local components
import Header from './components/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/Search';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const search = async () => {
      const { data } = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(data);
      setIsLoading(false);
    };

    const TimeoutId = setTimeout(() => {
      search();
    }, 500);

    return () => {
      clearTimeout(TimeoutId);
    };
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
