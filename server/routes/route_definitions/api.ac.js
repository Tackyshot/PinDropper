"use strict";
const mongoose = require('mongoose');

const Account = require('../../assets/models/account.js');

module.exports  = {
  method: ['GET', 'POST', 'PUT', 'DELETE'],
  path: "/api/{campaignId}/armorclass",
  handler: function (req, res){
    mongoose.connect('mongodb://localhost/test');

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