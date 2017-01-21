'use strict';
import request from 'superagent';

export default new class Request {
  constructor(){

  }

  get(route, callback){
    request
      .get(route)
      .set('Accept', 'application/json')
      .end((err, res)=>{
        let data = !err ? JSON.parse(res.text): null;
        callback(err, data);
      });
  }

  post(route, data, callback){
    request
      .post(route)
      .send(data)
      .set('Accept', 'application/json')
      .end((err, res)=>{
        let data = !err ? JSON.parse(res.text) : null;
        callback(err, data);
      });
  }

  put(route, data, callback){
    request
      .put(route)
      .send(data)
      .set('Accept', 'application/json')
      .end((err, res)=>{
        let data = !err ? JSON.parse(res.text) : null;
        callback(err, data);
      });
  }

  del(route, data, callback){
    request
      .del(route)
      .send(data)
      .set('Accept', 'application/json')
      .end((err, res)=>{
        let data = !err ? JSON.parse(res.text) : null;
        callback(err, data);
      });
  }
}