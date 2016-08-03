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

}

export default Alt.createActions(AcActions);