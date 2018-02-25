import React, {Component} from 'react';
import {Block} from 'common/gridlock/gridlock.jsx';
//import any other dependencies here.

export default class CharacterTile extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //rebindings for custom methods go here.
  }

  componentWillMount() {

  }

  render() {
    let character = this.props.character;

    //place JSX between the parens!
    return (
      <Block onClick={this.props.handleClick}>
        <img src="https://placekitten.com/g/50/50" width="50px" alt={`${character.first_name} ${character.last_name}`} />
      </Block>
    );
  }

  componentWillUnmount() {

  }

  //========================================================================
  // PLACE CUSTOM METHODS AND HANDLERS BELOW HERE
  //========================================================================
}//end CharTile class

CharacterTile.propTypes ={
  character: React.PropTypes.object,

  //the following are handled via Prop injection in './characterTiles.jsx'
  isSelected: React.PropTypes.bool,
  handleClick: React.PropTypes.func,
};

