import Alt          from '../alt.jsx';
import InventoryActions    from 'actions/inventory.actions.js';
import _            from 'lodash';

class InventoryStore {
  constructor(){
    this.bindListeners({
      set: InventoryActions.get,
      put: InventoryActions.put,
    });

    this.state = {
      inventory: []
    };

    this.invSchema = [
      {
        name: '',
        weight: 0,
        price: 0,
        qty: 0,
        location: '',
        description: ''
      }
    ]
  }//constructor

  set(inventory){
    if(inventory !== null){
      this.setState({
        inventory: inventory
      });
    }
  }//set

  put(inventory){
    if(inventory !== null) {
      this.setState({
        inventory: inventory
      });
    }
  }//put

  post(invItem){
    if(inventory !== null){

    }
  }

}

export default Alt.createStore(InventoryStore);