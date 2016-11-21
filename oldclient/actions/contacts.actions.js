"use strict";
import Alt      from '../alt.jsx';
import request  from 'tools/request';

class ContactsActions {

  get(callback){
    const route   = `/api/campaigns/${campaign}/characters/${character}/contacts`;

    return (dispatch)=>{
      request.get(route, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`ContactsActions .get() Err: ${err}`);

        callback(err);
      });
    }
  }//load

  put(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = `/api/campaigns/${campaign}/characters/${character}/contacts/${contactId}`;

    return (dispatch)=>{
      request.put(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`ContactsActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }//put

  post(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = `/api/campaigns/${campaign}/characters/contacts`;

    return (dispatch)=>{
      request.post(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`CharacterActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }

}

export default Alt.createActions(ContactsActions);