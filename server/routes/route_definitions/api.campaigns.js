"use strict";
const ConnectDb = require('../../assets/helpers/connectdb');
const Campaign  = require('../../assets/models/campaign');
const Account   = require('../../assets/models/account');

module.exports  = {
  method: ['GET', 'PUT'],
  path: "/api/campaign/{campaignId?}",
  handler: function (req, res){
    let connectdb = new ConnectDb();
    let searchBy = {
      account: req.auth.credentials._id
    };

    //todo: change campaign to hold array of accounts attached to it

    connectdb.connect((done)=>{
      switch(req.method){

        case "get":
          if(req.params.campaignId){
            searchBy._id = req.params.campaignId;
            Campaign.findOne(searchBy, (err, campaign)=>{
              if(err) console.log(err);


              done();
              res(campaign).type("application/json");
            });
          }
          else{
            Campaign.find({_users: {$in: req.auth.credentials.campaigns}}, (err, campaigns)=>{
              if(err) console.log(err);

              console.log('get campaigns:', campaigns, req.auth.credentials);

              done();
              res(campaigns).type("application/json");
            });
          }
        break;

        case 'post':
          let payload   = req.payload;
          payload.dm    = searchBy.account;
          let currentAccountCampaigns =  req.auth.credentials.campaigns;

          new Campaign(payload).save((err, campaign)=>{
            if(err) console.log(err);


            done();
            res(campaign).type("application/json");
          });
        break;

        case "put":
          searchBy._id = req.params.campaignId;
          Campaign.findOneAndUpdate(searchBy, req.data, (err, campaign)=>{
            if(err) console.log(err);

            done();
            res(campaign).type("application/json");
          });
        break;
      }
    });
  }//handler

}//exports