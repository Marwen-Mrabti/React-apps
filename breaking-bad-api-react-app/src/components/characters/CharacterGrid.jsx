import React from 'react';
import Spinner from '../Spinner';
import CharacterItem from './CharacterItem';

function CharacterGrid({ isLoading, items }) {
  return isLoading ? (
    <Spinner/>
  ) : (
    <div className="cards">
      {items.map((character) => {
        return <CharacterItem key={character.char_id} character={character} />;
      })}
    </div>
  );
}

export default CharacterGrid;
