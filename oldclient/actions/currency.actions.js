"use strict";
import Alt      from '../alt.jsx';
import request  from 'tools/request';

class CurrencyActions {

  get(callback){
    const route   = `/api/campaigns/${campaign}/characters/${character}/currency`;

    return (dispatch)=>{
      request.get(route, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`CurrencyActions .get() Err: ${err}`);

        callback(err);
      });
    }
  }//load

  put(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = `/api/campaigns/${campaign}/characters/${character}/currency/${currencyId}`;

    return (dispatch)=>{
      request.put(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`CurrencyActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }//put

  post(options, callback){
    const params  = options.params;
    const data    = options.data;
    const route   = `/api/campaigns/${campaign}/characters/currency`;

    return (dispatch)=>{
      request.post(route, data, (err, data)=>{
        if(!err)dispatch(data);
        else console.error(`CurrencyActions .put() Err: ${err}`);

        callback(err);
      });
    }
  }

}

export default Alt.createActions(CurrencyActions);