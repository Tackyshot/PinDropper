"use strict";
const ConnectDb = require('../../assets/helpers/connectdb');
const Character = require('../../assets/models/character');

module.exports  = {
  method: ['GET', 'POST', 'PUT', 'DELETE'],
  path: "/api/{campaignId}/{charId}/description ",
  handler: function (req, res){
    const connectdb = new ConnectDb();
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

            res({description: character.description})
              .type("application/json");
            done();
          });
        break;

        case "put":
          searchBy.retired = false; //must not be a retired character to make edits.
          Character.findOneAndUpdate(searchBy, req.data, (err, character)=>{
            res({description: character.description})
              .type("application/json");
            done();
          });
        break;
      }
    });

  }//handler

}//exports