import React from 'react';
import CharacterCard from '../CharacterCard';

function CharacterListPage(props) {
  return (
    <>
      <h1>Character List</h1>
      <div>
        {props.characters.map(character => (
          <CharacterCard
            userID={props.user._id}
            key={character._id}
            character={character}
            handleDeleteCharacter={props.handleDeleteCharacter}
          />
        ))}
      </div>
    </>
  );
}

export default CharacterListPage;
