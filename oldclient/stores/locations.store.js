import Alt          from '../alt.jsx';
import LocationActions    from 'actions/locations.actions.js';
import _            from 'lodash';

class InventoryStore {
  constructor(){
    this.bindListeners({
      set: LocationActions.get,
      put: LocationActions.put,
      post: LocationActions.post
    });

    this.state = {
      locations: []
    };

    this.locSchema = [
      {
        name: '',
        maxWeight: 0
      }
    ]
  }//constructor

  set(locations){
    if(locations !== null){
      this.setState({
        locations: locations
      });
    }
  }//set

  put(locItem){
    if(locItem !== null) {
      let newLoc = _.clone(this.state.locations, true);

      //find and replace locations item with new data
      newLoc.forEach((item, index)=>{
        if(item._id === locItem._id){
          newLoc[index] = locItem;
          this.setState({
            locations: newLoc
          });
        }
      });
    }
  }//put

  post(locItem){
    if(locItem !== null){
      let newLoc = _.clone(this.state.locations, true);

      newLoc.push(locItem);
      this.setState({
        locations: newLoc
      });
    }
  }

  del(locItem){
    if(locItem !== null){
      let newLoc = _.clone(this.state.locations, true);

      //find and remove locations item.
      newLoc.forEach((item, index)=>{
        if(item._id === locItem._id){
          newLoc.splice(index, 1);
          this.setState({
            locations: newLoc
          });
        }
      });
    }
  }

}

export default Alt.createStore(InventoryStore);