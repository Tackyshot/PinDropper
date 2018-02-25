import React, {Component} from 'react';
import {Row, Column, Block} from 'common/gridlock/gridlock';

import CharacterMenu from './characterMenu/characterMenu.jsx';

import SettingsStore from 'stores/settings.store.js';
//import any other dependencies here.

export default class CharacterTiles extends Component {
  constructor(props) {
    super(props);
    let settings = SettingsStore.getState();

    this.state = {
      selectedId: settings.character
    };

    //rebindings for custom methods go here.
    this.handleTileClick = this.handleTileClick.bind(this);
  }

  componentWillMount() {
    SettingsStore.listen(this.handleSettingsChange)

  }

  render() {

    //place JSX between the parens!
    return (
      <Row>
        <Column>
          <CharacterMenu selectedId={this.state.selectedId} />
        </Column>
        <Column>
          {React.Children.map(this.props.children, (CharacterTile) => {
            return React.cloneElement(CharacterTile, {
              isSelected: this.determineSelected(CharacterTile),
              handleClick: this.handleTileClick
            });
          })}
        </Column>
      </Row>
    );
  }

  componentWillUnmount() {

  }

  //========================================================================
  // PLACE CUSTOM METHODS AND HANDLERS BELOW HERE
  //========================================================================
  determineSelected(CharacterTile) {
    return CharacterTile.props.id === this.state.selectedId
  }//determineSelected

  handleTileClick(e) {
    //Trigger character selection in settings actions
  }//handleTileClick

  handleSettingsChange(nSettings){
    if(nSettings.character !== this.state.selectedId){
      this.setState({
        character: nSettings.character
      });
    }
  }
}//end CharacterWrapper class

CharacterTiles.propTypes = {
  selectedId: React.PropTypes.any || null //the ID of the selected character at that given moment.
};

