"use strict";
const ConnectDb = require('../../assets/helpers/connectdb');
const Character = require('../../assets/models/character');
const CharData  = require('../../assets/data/newCharacter');

module.exports  = {
  method: ['GET', 'POST'],
  path: "/api/{campaignId}/characters",
  handler: function (req, res) {
    const connectdb = new ConnectDb();
    let searchBy = {
      campaign: req.params.campaignId,
      account: req.auth.credentials._id
    };

    connectdb.connect((done)=> {
      switch (req.method) {
        case "get":
          Character.find(searchBy, (err, characters)=>{
            if(err) console.log("get characters error", err);

            console.log("CHARACTERS!", characters);
            res({characters: characters})
              .type("application/json")

            done();
          });
        break;
        case "post":
          CharData.account = req.auth.credentials._id;
          CharData.campaign = req.params.campaignId;

          let char = new Character(CharData);
          char.save((err, character)=>{
            console.log('create character for account:', 'dillbill', character);
            let response = character;
            if(err) {
              response = {err: "database error: could not create character.", success: false};
              console.log('err');
            }

            res(response).type("application/json");

            done();
          }); //save
        break;
      } //switch
    }); //connectdb.connect
  } //handler
}//exports