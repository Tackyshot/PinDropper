"use strict";
const Mongoose = require('mongoose');

class ConnectDB {
  constructor(){
    this['mongoose'] = Mongoose;
    this['db'];

    //rebindings;
    this.done = this.done.bind(this);

  }

  connect(callback){
    this['mongoose'].connect('mongodb://localhost/test'); //TODO: replace url with settings var
    this['db'] = this['mongoose'].connection;
    this['db'].on('error', console.error.bind(console, 'connection error:'));
    this['db'].once('open', ()=>{
      callback(this.done)
    });
  }

  done(){
    this['db'].close((err)=>{
      if(err) console.log("Mongodb close error:", err);
      else console.log("Mongodb client connection closed");
    });
  }

}

module.exports = ConnectDB;