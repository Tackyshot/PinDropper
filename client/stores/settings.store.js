import Alt          from '../alt.jsx';
import AcActions    from 'actions/ac.actions.js';
import _            from 'lodash';

class SettingsStore {
  constructor(){
    this.bindListeners({
      set: SettingsActions.get,
      put: SettingsActions.put,
    });

    this.state = {
      account: '', //account id
      campaign: null, //campaign id,
      character: null //character id
    };
  }//constructor

  set(settings){
    if(settings !== null){
      this.setState(settings);
    }
  }//set

  put(settings){
    if(settings !== null) {
      this.setState(settings);
    }
  }//put

}

export default Alt.createStore(SettingsStore);