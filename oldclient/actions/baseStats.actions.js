"use strict";
import Alt      from '../alt.jsx';
import request  from 'tools/request';

class baseStatsActions {

  get(callback){
    const route   = `/api/campaigns/${campaign}/characters/${character}/baseStats`;

    return (dispatch)=>{
      request.get(route, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`baseStatsActions .get() Err: ${err}`);

        callback(err);
      });
    }
  }//load

  put(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = `/api/campaigns/${campaign}/characters/${character}/baseStats`;

    return (dispatch)=>{
      request.put(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`baseStatsActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }//put

}

export default Alt.createActions(baseStatsActions);