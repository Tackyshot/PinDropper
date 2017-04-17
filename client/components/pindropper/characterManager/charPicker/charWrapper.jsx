import React, {Component} from 'react';
import {Row, Column, Block} from 'common/gridlock/gridlock';

import CharacterMenu from './characterMenu/characterMenu.jsx';
//import any other dependencies here.

export default class CharacterWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //rebindings for custom methods go here.
  }

  componentWillMount() {

  }

  render() {

    //place JSX between the parens!
    return (
      <Row>
        <Column>
          <CharacterMenu selectedId={this.props.selectedId} />
        </Column>
        <Column>
          {this.props.children}
        </Column>
      </Row>
    );
  }

  componentWillUnmount() {

  }

  //========================================================================
  // PLACE CUSTOM METHODS AND HANDLERS BELOW HERE
  //========================================================================
}//end CharacterWrapper class

CharacterWrapper.propTypes = {
  selectedId: React.PropTypes.string || null //the ID of the selected character at that given moment.
};

