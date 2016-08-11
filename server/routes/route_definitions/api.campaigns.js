"use strict";
const ConnectDb = require('../../assets/helpers/connectdb');
const Campaign  = require('../../assets/models/campaign');
const Account   = require('../../assets/models/account');

module.exports  = {
  method: ['GET', 'PUT', 'POST'],
  path: "/api/campaign/{campaignId?}",
  handler: function (req, res){
    let connectdb = new ConnectDb();
    let account   = req.auth.credentials;
    let searchBy  = {
      _id: account._id
    };

console.log("CREDS:", req.auth.credentials);

    connectdb.connect((done)=>{
      switch(req.method){

        case "get":
          if(req.params.campaignId){
            searchBy._id = req.params.campaignId;
            Campaign.findOne(searchBy, (err, campaign)=>{
              if(err) done(), console.log(err);

              done();
              res(campaign).type("application/json");
            });
          }
          else{
            Campaign.find({_id:{$in:account.campaigns}}, (err, campaigns)=>{
              if(err) done(), console.log(err);

              campaigns.dm === account._id ? campaigns.dm = true : campaigns.dm = false;

              done();
              res(campaigns).type("application/json");
            });
          }
        break;

        case 'post':
          let payload   = req.payload;
          payload.dm    = searchBy.account;

          new Campaign(payload).save((err, campaign)=>{
            if(err) done(), console.log(err);
//todo: Add new Campaign to the Account credentials cache

            done();
            res(campaign).type("application/json");
          });
        break;

        case "put":
          searchBy._id = req.params.campaignId;
          Campaign.findOneAndUpdate(searchBy, req.data, (err, campaign)=>{
            if(err) done(), console.log(err);

            done();
            res(campaign).type("application/json");
          });
        break;
      }
    });
  }//handler

}//exports