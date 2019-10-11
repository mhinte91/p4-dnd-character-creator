import React from 'react';
import CharacterCard from '../../components/PuppyCard/PuppyCard';

function CharacterListPage(props) {
  return (
    <>
      <h1>Character List</h1>
      <div>
        {props.characters.map(character => (
          <CharacterCard
            key={character._id}
            character={character}
            // handleDeletePuppy={props.handleDeletePuppy}
          />
        ))}
      </div>
    </>
  );
}

export default CharacterListPage;
