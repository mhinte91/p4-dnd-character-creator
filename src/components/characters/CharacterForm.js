import React from 'react';

const CharacterForm = () => {
  return (
    <form>
      <h2 className='text-primary'>Add Character</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        // value={name}
        // onChange={onChange}
      />
      <select
        type='text'
        placeholder='Race'
        name='race'
        // value={race}
        // onChange={onChange}
      >
        <option hidden>--Select Race--</option>
        <option value='Dragonborn'>Dragonborn</option>
        <option value='Dwarf'>Dwarf</option>
        <option value='Elf'>Elf</option>
        <option value='Gnome'>Gnome</option>
        <option value='Half-Elf'>Half-Elf</option>
        <option value='Half-Orc'>Half-Orc</option>
        <option value='Halfling'>Halfling</option>
        <option value='Human'>Human</option>
        <option value='Tiefling'>Tiefling</option>
      </select>
      <br />
      <select
        type='text'
        placeholder='Class'
        name='charClass'
        // value={charClass}
        // onChange={onChange}
      >
        <option hidden>--Select Class--</option>
        <option value='Barbarian'>Barbarian</option>
        <option value='Bard'>Bard</option>
        <option value='Cleric'>Cleric</option>
        <option value='Druid'>Druid</option>
        <option value='Fighter'>Fighter</option>
        <option value='Monk'>Monk</option>
        <option value='Paladin'>Paladin</option>
        <option value='Ranger'>Ranger</option>
      </select>
      <br />
      <textarea
        type='text'
        placeholder='Bio'
        name='bio'
        // value={bio}
        // onChange={onChange}
      />
      <div>
        <input
          type='submit'
          value='Add Character'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default CharacterForm;
