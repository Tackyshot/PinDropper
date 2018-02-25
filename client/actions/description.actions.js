import Alt from '../alt.jsx';
import Request from 'tools/request.js';

import SettingsStore from 'stores/settings.store.jsx';

class DescriptionActions {
  load(){
    let settings = SettingsStore.getState();
    let campaignId = settings.campaignId;
    let characterId = settings.characterId;
    let route = `/api/${campaignId}/${characterId}/description`;

    return (dispatch)=>{
      Request.get(route, (err, data)=>{
        if(!err) dispatch(data);
        else console.error("DescriptionActions.load error", err);
      })
    }
  }//load

  saveDescription(){
    let settings = SettingsStore.getState();
    let campaignId = settings.campaignId;
    let characterId = settings.characterId;
    let route = `/api/${campaignId}/${characterId}/description`;

    return (dispatch)=>{
      Request.put(route, (err, data)=>{
        if(!err) dispatch(data);
        else console.err('DescriptionActions.save error', err);
      });
    }
  }

  updateContentByKey(data){
    return (dispatch) => {
      dispatch(data);
    }
  }

}

export default Alt.createActions(DescriptionActions)