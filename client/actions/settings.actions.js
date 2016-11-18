"use strict";
import Alt      from '../alt.jsx';
import request  from 'tools/request';

class AcActions {

  set(key, value, callback){

    return (dispatch)=>{
        dispatch({
          key: key,
          value: value
        });
        callback();
      }

  }//load

  /*put(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = '/api/todos/' + params.todoId;

    return (dispatch)=>{
      request.put(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`AcActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }//put*/

  getCampaigns(callback){
    const route   = `/api/campaign`;

    return (dispatch)=>{
      request.get(route, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`CampaignActions .get() Err: ${err}`);

        callback(err);
      });
    }
  }//load

  updateCampaign(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = `/api/campaign/${params.campaignId}`; //use campaign settings store instead?

    return (dispatch)=>{
      request.put(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`CampaignActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }//put

  newCampaign(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = `/api/campaign`;

    return (dispatch)=>{
      request.post(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`CampaignActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }

}

export default Alt.createActions(AcActions);