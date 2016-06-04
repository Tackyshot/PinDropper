"use strict";
const mongoose = require('mongoose');

const Account = require('../../assets/models/account.js');

module.exports  = {
  method: ['GET', 'POST', 'PUT', 'DELETE'],
  path: "/api/{campaignId}/newchar",
  handler: function (req, res){
    mongoose.connect('mongodb://localhost/test');
    let db = mongoose.connection;
    console.log("METHOD:", req.method);

    switch(req.method){

      case "get":

        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
          // we're connected!
          Account.findOne({username: 'dillbill'}, (err, account)=>{
            console.log("ACCOUNT RETURN:", account);
            res(account)
              .type("application/json");
            db.close(()=>{
              console.log("close db connection")
            })
          });
        });
      break;

      case "post":
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
          // we're connected!
          let account = new Account({
            username: 'dillbill',
            password: 'TestPass',
            email: "testemail@yahoo.com"
          });

          account.save((err, accountz)=>{
            console.log("ACCOUNT CREATE:", account);
            res(accountz)
              .type("application/json");
            db.close(()=>{
              console.log("close db connection")
            })
          })

        });
      break;

      case "put":
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
          // we're connected!
          Account.update({username: 'dillbill'}, {password: 'Updated Password!'}, (err, accountt)=>{
            if(err) console.log("UPDATE ERROR:", err);
            else console.log("UPDATE ACCOUNT:", accountt);

            Account.findOne({username: 'dillbill'}, (err, account)=>{
              console.log("ACCOUNT EDIT:", account);
              res(account)
                .type("application/json");
              db.close(()=>{
                console.log("close db connection")
              })
            });
          });
        });
      break;

      case "delete":
        res()
          .type("application/json");
      break;
    }

  }//handler

}//exports