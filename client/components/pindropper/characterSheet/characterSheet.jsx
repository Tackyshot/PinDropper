import React, {Component} from 'react';
import Style from 'styles';

import CharacterStore from 'stores/characters.store.js';
import CharacterActions from 'actions/characters.actions.js';

export default class CharacterSheet extends Component{
  constructor(props){
    super(props);

    this.state={};

    //rebindings

  }

  componentWillMount(){

  }

  render(){

    return (
      <CharacterPicker >

      </CharacterPicker>
    )
  }
}