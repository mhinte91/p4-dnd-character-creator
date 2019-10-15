import React from 'react';
import CharacterCard from '../CharacterCard';
import { getAll } from '../../services/characters-api';

function CharacterListPage(props) {
  return (
    <>
      <h1>Character List</h1>
      <div>
        {props.characters.map(character => (
          <CharacterCard
            user={props.user}
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
