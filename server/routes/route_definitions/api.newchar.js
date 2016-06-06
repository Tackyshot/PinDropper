"use strict";
const ConnectDb = require('../../assets/helpers/connectdb');
const Character = require('../../assets/models/character');
const CharData  = require('../../assets/data/newCharacter');

module.exports  = {
  method: ['POST'],
  path: "/api/{campaignId}/{charId}/newchar",
  handler: function (req, res) {
    const connectdb = new ConnectDb();

    connectdb.connect((done)=> {
      switch (req.method) {
        case "post":
          CharData.account = 'dillbill';
          CharData.campaign = '1';

          let char = new Character(CharData);
          char.save((err, character)=>{
            console.log('create character for account:', 'dillbill', character);
            let response = character;
            if(err) {
              response = {err: "database error: could not create character.", success: false};
              console.log('err');
            }

            res(response)
              .type("application/json");
            done();
          });
        break;
      }
    });

    /*const connectdb = new ConnectDb();

    connectdb.connect((done)=> {
      switch (req.method) {
        case "get":

          Account.findOne({username: 'dillbill'}, (err, account)=> {
            console.log("ACCOUNT RETURN:", account);
            res(account)
              .type("application/json");
            done();
          });
          break;

        case "post":
          let account = new Account({
            username: 'dillbill',
            password: 'TestPass',
            email: "testemail@yahoo.com"
          });

          account.save((err, accountz)=> {
            console.log("ACCOUNT CREATE:", account);
            res(accountz)
              .type("application/json");
            done();
          });
          break;

        case "put":
          Account.findOneAndUpdate({username: 'dillbill'}, {password: 'Updated Password!'}, (err, accountt)=> {
            if (err) console.log("UPDATE ERROR:", err);
            else console.log("UPDATE ACCOUNT:", accountt);

            Account.findOne({username: 'dillbill'}, (err, account)=> {
              console.log("ACCOUNT EDIT:", account);
              res(account)
                .type("application/json");
              done();
            });
          });
          break;

        case "delete":
          res()
            .type("application/json");
          break;
      }
    });*/
  }
}//exports