"use strict";
const mongoose = require('mongoose');

const Account = require('../../assets/models/account.js');

module.exports  = {
  method: ['POST', 'GET'],
  path: "/api/{campaignId}/newchar",
  handler: function (req, res){
    mongoose.connect('mongodb://localhost/test');

    switch(req.method){

      case "post":

        res()
          .type("application/json");
      break;
    }

  }//handler

}//exports