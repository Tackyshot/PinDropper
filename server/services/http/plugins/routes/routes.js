"use strict";
const fs = require('fs');
const jwt = require('jsonwebtoken');

exports.register = (server, options, next) => {
  let routes = fs.readdirSync(`${__dirname}/route_definitions/`);
  let Account = require(`${server.app.constants.collections}/accounts.collection.js`);
  let callRoutes = ()=>{
    routes.forEach((route) => {
      server.register(require(`${__dirname}/route_definitions/${route}`), (err) => {
        if(err) throw err;
      });
    });
  };
  let validate = (dT, request, callback) => { //dt => decodedToken
    Account.findById({_id: dT._id}, (err, acc) => {
      if(dT._id !== acc._id.toString() || dT.email !== acc.email || dT.type !== acc.type) {
        return callback(err, false, acc);
      }
      else{
        return callback(err, true, acc);
      }
    });
  };

  server.register(require('hapi-auth-jwt2'), (err) => {
    if(!!err) return console.error('auth plugin registration error:', err);

    server.auth.strategy('token', 'jwt', {
      key: server.app.constants.config.privateKey,
      validateFunc: validate,
      verifyOptions: { algorithms: [ 'HS256' ] }  // only allow HS256 algorithm
    });

    callRoutes();

    next();
  });

  next();
};

exports.register.attributes = {
  name: 'routesPlugin',
  version: '1.0.0'
};