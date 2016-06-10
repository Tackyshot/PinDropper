"use strict";
const path  = require('path'),
      hapi  = require('hapi'),
      fs    = require('fs'),
      _     = require('lodash');

module.exports = new class Server {
  constructor() {
    this.server = new hapi.Server();
    let server = this.server;

    this.start = this.start.bind(this);

    server.connection(
      {
        port: 3001
      }
    );

    server.register(require('hapi-auth-cookie'), (err)=>{
      const cache = server.cache({ segment: 'sessions', expiresIn: 3 * 24 * 60 * 60 * 1000 });
      server.app.cache = cache;
      server.auth.strategy('session', 'cookie', true, {
        password: 'password-should-be-32-characters',
        cookie: 'sid-example',
        redirectTo: '/login',
        isSecure: false,
        validateFunc: (req, session, callback)=>{
          cache.get(session.sid, (err, cached) => {

            if (err) {
              return callback(err, false);
            }
            if (!cached) {
              return callback(null, false);
            }
            return callback(null, true, cached.account);
          });
        }

      });

      server.register(require('./routes/router.js'), (err) => {
        if (err) return console.error("routes error: ", err);
      });
    });

  }//constructor

  start() {
    return this.server.start((err) => {
      if (err) return console.log("Start Error:", err);

      console.log("Server Started at:", this.server.info.uri);
      return this.server;
    });
  }

  stop(callback) {
    this.server.stop(callback)
  }

};