import Alt from '../alt.jsx';
import DescriptionActions from 'actions/description.actions.js';

class DescriptionStore{
  constructor(){
    this.bindListners(DescriptionActions);

    this.bindActions({
      setDescription: [DescriptionActions.load, DescriptionActions.saveDescription],
      setDescrptionItem: [
        DescriptionActions.updateContentByKey,
      ]
    });

    this.state = {
      description: null
    }
  }

  onLoad(description) {
    this.setDescription(description);
  }//onLoad

  onSaveDescription(description) {
    this.setDescription(description);
  }//onSaveDescription

  setDescription(description){
    this.setState({
      description: description
    });
  }

  onUpdateContentByKey(dispatched){
    let description = {...this.state};
    let key = dispatched.key;
    let value = dispatched.value;

    description[key] = value;

    this.setState({
      description: description
    });
  }


}

export default Alt.createStore(DescriptionStore);
