"use strict";
import Alt      from '../alt.jsx';
import request  from 'tools/request';

class LocationActions {

  get(callback){
    const route   = `/api/campaigns/${params.campaignId}/characters/${characterId}/locations/`;

    return (dispatch)=>{
      request.get(route, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`LocationActions .get() Err: ${err}`);

        callback(err);
      });
    }
  }//load

  put(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = `/api/campaigns/${params.campaignId}/characters/${characterId}/locations/${locationId}`; //use campaign settings store instead?

    return (dispatch)=>{
      request.put(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`LocationActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }//put

  post(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = `/api/campaigns/${params.campaignId}/characters/${characterId}/locations/`;

    return (dispatch)=>{
      request.post(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`LocationActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }

  del(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = `/api/campaigns/${params.campaignId}/characters/${characterId}/locations/${locationId}`;

    return (dispatch)=>{
      request.del(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`LocationActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }
}

export default Alt.createActions(LocationActions);