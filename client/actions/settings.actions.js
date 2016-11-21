"use strict";
import Alt from '../alt.jsx';
import Request from 'tools/request.js';

class SettingsActions {
  newSetting (key, value){
    return (dispatch)=>{
      dispatch({
        key: key,
        value: value
      });
    }
  }

  updateSetting (key, value){
    return (dispatch)=>{
      dispatch({
        key: key,
        value: value
      });
    }
  }
}

export default Alt.createActions(SettingsActions);