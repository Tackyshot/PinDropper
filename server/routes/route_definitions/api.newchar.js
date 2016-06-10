"use strict";
const ConnectDb = require('../../assets/helpers/connectdb');
const Character = require('../../assets/models/character');
const CharData  = require('../../assets/data/newCharacter');

module.exports  = {
  method: ['POST'],
  path: "/api/{campaignId}/newchar",
  handler: function (req, res) {
    const connectdb = new ConnectDb();

    connectdb.connect((done)=> {
      switch (req.method) {
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