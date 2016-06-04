"use strict";
const mongoose = require('mongoose');

const Account = require('../../assets/models/account.js');

module.exports  = {
  method: ['GET', 'POST', 'PUT', 'DELETE'],
  path: "/api/{campaignId}/character",
  handler: function (req, res){
    mongoose.connect('mongodb://localhost/test');
    let character = {
      description: {
        name: '',
        class: '',
        level: 0,
        alignment: '',
        race: '',
        subrace: '',
        diety:'',
        size: '',
        height: '',
        weight: 0,
        gender: '',
        currentXP: 0,
        neededXP: 0,
        speed: 0
      }
    };

    switch(req.method){

      case "get":
        res()
          .type("application/json");
        break;

      case "post":
        res()
          .type("application/json");
        break;

      case "put":
        res()
          .type("application/json");
        break;

      case "delete":
        res()
          .type("application/json");
        break;
    }

  }//handler

}//exports