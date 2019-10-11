import React from 'react';
import * as characterAPI from '../../services/characters-api';

class CharacterEditPage extends React.Component {
  state = {
    invalidForm: true,
    formData: this.props.location.state.character
  };

  formRef = React.createRef();

  handleUpdateCharacter = async updatedCharData => {
    const updatedCharacter = await characterAPI.update(updatedCharData);
    // const newCharactersArray = this.state.characters.map(c =>
    //   c._id === updatedCharacter._id ? updatedCharacter : c
    // );
    // this.setState(
    //   { characters: newCharactersArray },
    //   // Using cb to wait for state to update before rerouting
    //   () => this.props.history.push('/')
    // );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.handleUpdateCharacter(this.state.formData);
    this.props.history.push('/');
  };

  handleChange = e => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <form ref={this.formRef} onSubmit={this.handleSubmit}>
        <h2 className='text-primary'>Add Character</h2>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.formData.name}
          onChange={this.handleChange}
          required
        />
        <select
          type='text'
          placeholder='Race'
          name='race'
          value={this.state.formData.race}
          onChange={this.handleChange}
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
          value={this.state.formData.charClass}
          onChange={this.handleChange}
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
          value={this.state.formData.bio}
          onChange={this.handleChange}
        />
        <div>
          <input
            type='submit'
            value='Update Character'
            className='btn btn-primary btn-block'
          />
        </div>
      </form>
    );
  }
}

export default CharacterEditPage;