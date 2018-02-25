import React, {Component} from 'react';
import {CharacterTiles, CharacterTile} from './characterPicker/characterPicker.jsx';
//import any other dependencies here.

export default class CharacterManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    };

    //rebindings for custom methods go here.
  }

  componentWillMount() {
    //Load List of Characters from API, Names and Image URL

  }

  render() {
    //Iterate through list of Characters Render a Character Tile.

    //place JSX between the parens!
    return (
      <CharacterTiles>
        {this.state.characters.map((character) => {
          return <CharacterTile character={character} />
        })}
      </CharacterTiles>
    );
  }

  componentWillUnmount() {

  }

  //========================================================================
  // PLACE CUSTOM METHODS AND HANDLERS BELOW HERE
  //========================================================================
}//end CharacterManager class

CharacterManager.propTypes = {

};

