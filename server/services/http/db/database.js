"use strict";
const mongoose = require('mongoose');

class Database{
  constructor() {
    
  }//constructor

  connect() {
    mongoose.Promise = require('bluebird');
    let promise = mongoose.connect('mongodb://localhost/surveyor-dev-01', {useMongoClient: true});

    return promise;
  }//connect
}

module.exports = Database;