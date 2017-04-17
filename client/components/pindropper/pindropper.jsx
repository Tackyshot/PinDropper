import React, {Component} from 'react';
import SettingsStore from 'stores/settings.store.js';

import AccountManager from './accountManager/accountManager.jsx';
import CharacterManager from './characterManager/characterManager.jsx';

export default class PinDropper extends Component{
  constructor(props){
    super(props);

    this.state = {
      settings: null
    }

    this.handleSettings = this.handleSettings.bind(this);
  }

  componentWillMount(){
    SettingsStore.listen(this.handleSettings);
  }

  render(){

    //<Corkboard />
    //<CharacterSheet />
    //<AccountManager />
    //<Chatbox />

    return(
      <div>
        <AccountManager {...this.props} isOpen={false} settings={this.state.settings} />
        <CharacterManager {...this.props} />
      </div>
    )
  }

  handleSettings(settings){
    this.setState({
      settings: settings
    });
  }
}