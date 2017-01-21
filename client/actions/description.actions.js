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

  updateName(name){
    return (dispatch)=>{
      dispatch({
        key:'name',
        value: name
      })
    }
  }

  updateClass(value){
    return (dispatch)=>{
      dispatch({
        key:'class',
        value: value
      })
    }
  }

  updateLevel(value){
    return (dispatch)=>{
      dispatch({
        key:'level',
        value: value
      })
    }
  }

  updateAlignment(value){
    return (dispatch)=>{
      dispatch({
        key:'alignment',
        value: value
      })
    }
  }

  updateRace(value){
    return (dispatch)=>{
      dispatch({
        key:'race',
        value: value
      })
    }
  }

  updateSubRace(value){
    return (dispatch)=>{
      dispatch({
        key:'subrace',
        value: value
      })
    }
  }

  updateDiety(value){
    return (dispatch)=>{
      dispatch({
        key:'diety',
        value: value
      })
    }
  }

  updateSize(value){
    return (dispatch)=>{
      dispatch({
        key:'size',
        value: value
      })
    }
  }

  updateHeight(value){
    return (dispatch)=>{
      dispatch({
        key:'height',
        value: value
      })
    }
  }

  updateWeight(value){
    return (dispatch)=>{
      dispatch({
        key:'weight',
        value: value
      })
    }
  }

  updateGender(value){
    return (dispatch)=>{
      dispatch({
        key:'gender',
        value: value
      })
    }
  }

  updateCurrentXP(value){
    return (dispatch)=>{
      dispatch({
        key:'currentXP',
        value: value
      })
    }
  }

  updateNeededXP(value){
    return (dispatch)=>{
      dispatch({
        key:'neededXP',
        value: value
      })
    }
  }

  updateSpeed(value){
    return (dispatch)=>{
      dispatch({
        key:'speed',
        value: value
      })
    }
  }

}

export default Alt.createActions(DescriptionActions)