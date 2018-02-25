"use strict";
const ConnectDb = require('../../assets/helpers/connectdb');
const Character = require('../../assets/models/character');

module.exports  = {
  method: ['GET', 'PUT'],
  path: "/api/{campaignId}/{charId}/locations",
  handler: function (req, res){
    let connectdb = new ConnectDb();
    let searchBy = {
      _id: 'someID', //req.params.charID
      campaign: '1', //req.params.campaign
      account: 'dillbill', //TODO: replace these with variables from auth and path
    };

    connectdb.connect((done)=>{
      switch(req.method){

        case "get":
          Character.findOne(searchBy, (err, character)=>{
            if(err) console.log(err);
            res({locations: character.locations})
              .type("application/json");
          });
          break;

        case "put":
          Character.findOneAndUpdate(searchBy, req.data, (err, character)=>{
            res({locations: character.locations})
              .type("application/json");
          });
          break;

      }
    })

  }//handler

}//exports