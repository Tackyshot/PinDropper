import Alt          from '../alt.jsx';
import InventoryActions    from 'actions/inventory.actions.js';
import _            from 'lodash';

class InventoryStore {
  constructor(){
    this.bindListeners({
      set: InventoryActions.get,
      put: InventoryActions.put,
      post: InventoryActions.post,
      del: InventoryActions.del
    });

    this.state = {
      inventory: []
    };

    this.invSchema = [
      {
        _id:'',
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

  put(invItem){
    if(invItem !== null) {
      let newInv = _.clone(this.state.inventory, true);

      //find and replace inventory item with new data
      newInv.forEach((item, index)=>{
        if(item._id === invItem._id){
          newInv[index] = invItem;
          this.setState({
            inventory: newInv
          });
        }
      });
    }
  }//put

  post(invItem){
    if(invItem !== null){
      let newInv = _.clone(this.state.inventory, true);

      newInv.push(invItem);
      this.setState({
        inventory: newInv
      });
    }
  }

  del(invItem){
    if(invItem !== null){
      let newInv = _.clone(this.state.inventory, true);

      //find and remove inventory item.
      newInv.forEach((item, index)=>{
        if(item._id === invItem._id){
          newInv.splice(index, 1);
          this.setState({
            inventory: newInv
          });
        }
      });
    }
  }

}

export default Alt.createStore(InventoryStore);