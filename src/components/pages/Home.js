import React from 'react';
import { Route, Navlink } from 'react-router-dom';
import * as characterAPI from '../../services/characters-api';
import CharacterForm from '../characters/CharacterForm';
import CharacterListPage from '../pages/CharacterListPage';

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

  handleDeleteCharacter = async id => {
    await characterAPI.deleteOne(id);
    this.setState(
      state => ({
        // Yay, filter returns a NEW array
        characters: state.characters.filter(c => c._id !== id)
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
        <div>
          <CharacterListPage
            characters={this.state.characters}
            handleDeleteCharacter={this.handleDeleteCharacter}
          />
        </div>
        <div></div>
      </div>
    );
  }
}

export default Home;
