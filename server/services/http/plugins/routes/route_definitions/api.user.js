"use strict";
const bcrypt = require('bcryptjs');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const blacklist = require('blacklist');

exports.register = (server, options, next) => {
  let Account = require(`${server.app.constants.collections}/accounts.collection.js`);
  server.route({
    method: ['GET'],
    path: '/api/user/{userId}',
    handler: (req, res) => {
      let params = req.params;
      let doctor_id = req.auth.credentials._id;

      console.log("get user:", params.userId, doctor_id);

      if(doctor_id == params.userId){
        console.log("yuup");
        Account.findById({_id: doctor_id}, (err, account) => {
          if(err) return console.console.error(err);

          res({user: account})
            .type('text/javascript')
        });
      }

      // switch (req.param) {
      //   case 'login':
      //     Account.findByEmail({email: payload.email}, (err, account) => {
      //       if(err) return console.error(err);//handler error here
      //       if(bcrypt.compareSync(payload.password, account.password)){
      //         let token = jwt.sign({_id: account._id, email: account.email, type: account.type}, server.app.constants.config.privateKey, { algorithm: 'HS256'});
      //         let nAccount = blacklist(account, {
      //           password: true
      //         });
      //
      //         res({jwt: token, user: nAccount})
      //           .type('text/javascript')
      //           .header('Authorization', token);
      //       }
      //     });
      //   break;
      //   case 'register':
      //     Account.findByEmail({email: payload.email}, (err, account) => {
      //       if(!!err) return console.error(err);
      //       if(account == null && !!payload.password){
      //         let acc = payload;
      //         acc.password = bcrypt.hashSync(payload.password, bcrypt.genSaltSync(10));
      //         Account.newAccount(acc, (err, acc) => {
      //           if(!!err) return console.error(err);
      //           let token = jwt.sign({_id: acc._id, email: acc.email, type: acc.type}, server.app.constants.config.privateKey, { algorithm: 'HS256'});
      //
      //           res({jwt: token})
      //             .type('text/javascript')
      //             .header('Authorization', token);
      //         });
      //       };
      //     });
      //   break;
      //   case 'logout':
      //
      //   break;
      //
      //
      // }
    },
    config:{
      auth:{
        mode: 'required',
        strategy: 'token'
      },
      // validate:{
      //   payload:{
      //     type: Joi.string(),
      //     first_name: Joi.string(),
      //     last_name: Joi.string(),
      //     middle_name: Joi.string(),
      //     email: Joi.string().email().required(),
      //     password: Joi.string(), //only required
      //     imr_number: Joi.string(),
      //     phone_number: Joi.string().length(9),
      //     address: {
      //       street_address: Joi.string(),
      //       city: Joi.string(),
      //       state: Joi.string().length(2),
      //       zip_code: Joi.string().length(5)
      //     }
      //   }
      // }
    }
  });
  next();
};

exports.register.attributes = {
  name: "userRoute",
  version: "1.0.0"
};
