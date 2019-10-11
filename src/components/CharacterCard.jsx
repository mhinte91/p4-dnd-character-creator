import React from 'react';
import { Link } from 'react-router-dom';

function CharacterCard({ character, handleDeleteCharacter }) {
  return (
    <div>
      <div>
        <h3>{character.name}</h3>
      </div>
      <div>
        <dl>
          <dt>Race</dt>
          <dd>{character.race}</dd>
          <dt>Class</dt>
          <dd>{character.charClass}</dd>
          <dt>Bio</dt>
          <dd>{character.bio}</dd>
        </dl>
      </div>
      <div>
        {/* 
          The following is another approach to provide 
          data to a different route that's different
          from the Star Wars lab's solution code.
          The state object can be accessed in the new
          route via the location.state object
        */}
        <Link
          to={{
            pathname: '/edit',
            state: { character }
          }}
        >
          EDIT
        </Link>
        <button onClick={() => handleDeleteCharacter(character._id)}>
          DELETE
        </button>
      </div>
    </div>
  );
}

export default CharacterCard;
