"use strict";
import Alt      from '../alt.jsx';
import request  from 'tools/request';

class FeatsActions {

  get(callback){
    const route   = `/api/campaigns/${campaign}/characters/${character}/feats`;

    return (dispatch)=>{
      request.get(route, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`FeatsActions .get() Err: ${err}`);

        callback(err);
      });
    }
  }//load

  put(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = `/api/campaigns/${campaign}/characters/${character}/feats/${featId}`;

    return (dispatch)=>{
      request.put(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`FeatsActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }//put

  post(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = `/api/campaigns/${campaign}/characters/feats`;

    return (dispatch)=>{
      request.post(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`FeatsActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }

}

export default Alt.createActions(FeatsActions);