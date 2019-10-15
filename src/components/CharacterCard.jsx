import React from 'react';
import { Link } from 'react-router-dom';

function CharacterCard({ character, handleDeleteCharacter, userID }) {
  const { name, race, charClass, bio, user } = character;
  return (
    <div>
      {user === userID ? (
        <div className='card bg-light'>
          <h3 className='text-primary text-left'>
            {name}
            <button
              style={{ float: 'right' }}
              className='btn btn-primary btn-sm'
            >
              Stats
            </button>
          </h3>
          <ul className='list'>
            <li>
              <i className='fas fa-shield-alt' /> {race} {charClass}
            </li>
            {bio && (
              <li>
                <i className='fas fa-atlas' /> {bio}
              </li>
            )}
          </ul>

          <Link
            className='btn btn-dark btn-sm'
            to={{
              pathname: '/edit',
              state: { character }
            }}
          >
            EDIT
          </Link>
          <button
            className='btn btn-danger btn-sm'
            onClick={() => handleDeleteCharacter(character._id)}
          >
            DELETE
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default CharacterCard;
