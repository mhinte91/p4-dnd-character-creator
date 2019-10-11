import React from 'react';

const CharacterItem = ({ character }) => {
  const { name, race, charClass, bio } = character;

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}
        <button style={{ float: 'right' }} className='btn btn-primary btn-sm'>
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
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(character)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default CharacterItem;
