import Alt from '../alt.jsx';
import DescriptionActions from 'actions/description.actions.js';

class DescriptionStore{
  constructor(){
    this.bindActions({
      setDescription: [DescriptionActions.load, DescriptionActions.saveDescription],
      setDescrptionItem: [
        DescriptionActions.updateName,
        DescriptionActions.updateClass,
        DescriptionActions.updateLevel,
        DescriptionActions.updateAlignment,
        DescriptionActions.updateRace,
        DescriptionActions.updateSubRace,
        DescriptionActions.updateDiety,
        DescriptionActions.updateSize,
        DescriptionActions.updateHeight,
        DescriptionActions.updateWeight,
        DescriptionActions.updateGender,
        DescriptionActions.updateCurrentXP,
        DescriptionActions.updateNeededXP,
        DescriptionActions.updateSpeed
      ]
    });

    this.state = {
      description: null
    }
  }

  setDescription(description){
    this.setState({
      description: description
    })
  }

  setDescriptionItem(dispatched){
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
