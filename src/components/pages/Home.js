import React from 'react';
import { Route, Navlink } from 'react-router-dom';
import CharacterForm from '../characters/CharacterForm';
import * as characterAPI from '../../services/characters-api';

class Home extends React.Component {
  state = {
    characters: []
  };

  handleAddCharacter = async newCharData => {
    const newChar = await characterAPI.create(newCharData);
    this.setState(
      state => ({
        characters: [...state.characters, newChar]
      }),
      () => this.props.history.push('/')
    );
  };

  /*-----Lifecycle Methods ----------*/
  async componentDidMount() {
    const characters = await characterAPI.getAll();
    this.setState({ characters });
  }

  render() {
    return (
      <div className='grid-3'>
        <div></div>
        <div>
          <CharacterForm handleAddCharacter={this.handleAddCharacter} />
        </div>
        <div></div>
      </div>
    );
  }
}

export default Home;
