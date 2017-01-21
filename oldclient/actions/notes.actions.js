"use strict";
import Alt      from '../alt.jsx';
import request  from 'tools/request';

class NotesActions {

  get(callback){
    const route   = `/api/campaigns/${params.campaignId}/characters/${characterId}/notes/`;

    return (dispatch)=>{
      request.get(route, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`NotesActions .get() Err: ${err}`);

        callback(err);
      });
    }
  }//load

  putCustom(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = `/api/campaigns/${params.campaignId}/characters/${characterId}/notes/custom/${noteId}`; //use campaign settings store instead?

    return (dispatch)=>{
      request.put(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`NotesActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }//putCustom

  put(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = `/api/campaigns/${params.campaignId}/characters/${characterId}/notes`; //use campaign settings store instead?

    return (dispatch)=>{
      request.put(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`NotesActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }//putCustom

  post(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = `/api/campaigns/${params.campaignId}/characters/${characterId}/notes/`;

    return (dispatch)=>{
      request.post(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`NotesActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }

  del(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = `/api/campaigns/${params.campaignId}/characters/${characterId}/notes/custom/${noteId}`;

    return (dispatch)=>{
      request.del(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`NotesActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }
}

export default Alt.createActions(NotesActions);