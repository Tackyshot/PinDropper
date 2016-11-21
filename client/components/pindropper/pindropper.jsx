import React, {Component} from 'react';
import SettingsStore from 'stores/settings.store.js';

import AccountManager from './accountManager/accountManager.jsx';

export default class PinDropper extends Component{
  constructor(props){
    super(props);

    this.state = {
      settings: null
    }
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
        <AccountManager isOpen={false} settings={this.props.settings} />
      </div>
    )
  }

  handleSettings(){
    this.setState({
      settings: SettingsStore.getState()
    });
  }
}