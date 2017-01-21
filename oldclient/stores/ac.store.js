import Alt          from '../alt.jsx';
import AcActions    from 'actions/ac.actions.js';
import _            from 'lodash';

class AcStore {
  constructor(){
    this.bindListeners({
      set: AcActions.get,
      put: AcActions.put,
    });

    this.state = {
      ac: {
        natAc: 0,
        misc: [] //array of integers
      }
    };
  }//constructor

  set(ac){
    if(ac !== null){
      this.setState({
        ac: ac
      });
    }
  }//set

  put(ac){
    if(ac !== null) {
      this.setState({
        ac: ac
      });
    }
  }//put

}

export default Alt.createStore(AcStore);