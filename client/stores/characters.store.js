import Alt from '../alt.jsx';
import CharactersActions from 'actions/characters.actions.js';

class CharactersStore{
  constructor(){
    this.bindActions({
      onLoad: CharactersActions.load,
      onNewCharacter: CharactersActions.newCharacter

    });

    this.state = {
      characters: null
    }
  }

  onLoad(characters){
    this.setState({
      characters: characters
    });
  }

  onNewCharacter(character){
    let cloneState = {...this.state};

    cloneState.characters.push(character);

    this.setState(cloneState);
  }

}

export default Alt.createStore(DescriptionStore);
