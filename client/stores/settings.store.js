import Alt          from '../alt.jsx';
import SettingsActions    from 'actions/ac.actions.js';
import _            from 'lodash';

class SettingsStore {
  constructor(){
    this.bindListeners({
      set: SettingsActions.set,
      //put: SettingsActions.put,
    });

    this.state = {
      account: '', //account id
      campaign: null, //campaign id,
      character: null //character id
    };
  }//constructor

  set(setting){
    let nSettings = _.clone(this.state, true);

    nSettings[setting.key] = setting.value;
    this.setState(nSettings);
  }//set

  /*put(settings){
    if(settings !== null) {
      this.setState(settings);
    }
  }//put*/

  onGetCampaigns(campaigns){

  }


}

export default Alt.createStore(SettingsStore);