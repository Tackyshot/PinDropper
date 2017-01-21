import Alt from '../alt.jsx';
import Request from 'tools/request.js';

import SettingsStore from 'stores/settings.store.jsx';

class CharactersActions {
  load(){
    let settings = SettingsStore.getState();
    let campaignId = settings.campaignId;
    let route = `/api/${campaignId}/characters`;

    return (dispatch)=>{
      Request.get(route, (err, data)=>{
        if(!err) dispatch(data);
        else console.error("CharactersActions.load error", err);
      })
    }
  }//load

  newCharacter(){
    let settings = SettingsStore.getState();
    let campaignId = settings.campaignId;
    let characterId = settings.characterId;
    let route = `/api/${campaignId}/characters`;

    return (dispatch)=>{
      Request.post(route, (err, data)=>{
        if(!err) dispatch(data);
        else console.err('CharactersActions.save error', err);
      });
    }
  }

}

export default Alt.createActions(CharactersActions)