import Alt from '../alt.jsx';
import SettingsActions from 'actions/settings.actions.js';

class SettingsStore{
  constructor(){
    this.bindActions(SettingsActions);

    this.state = {
      account: null,
      campaign: null,
      character: null
    }
  }

  onNewSettings(data){
    this.setSetting(data);
  }

  onUpdateSetting(data){
    this.setSetting(data);
  }

  setSetting(data){
    let key = data.key;
    let val = data.value;
    let obj = {};

    obj[key] = val;
    this.setState(obj);
  }
}

export default Alt.createStore(SettingsStore);