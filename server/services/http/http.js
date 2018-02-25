'use strict';
const fs = require('fs');
const Hapi = require('hapi');
const connOptions = require('./config/http.options.js');

module.exports = class Http {
  constructor() {
    let server = new Hapi.Server();

    server.connection(connOptions);
    server.app.constants = this.constructor.setAppConstants();

    server.register(require('./plugins.handler.js'), (err) => {
      if(err) throw err;
    });

    this.start = ()=> this.constructor.startServer(server);
    this.stop = ()=> this.constructor.stopServer(server);

  }//constructor

  static startServer(server){
    let status = '';

    server.start((err) => {
      if(err){
        console.error(`http server start error: ${err}`);
        status = err;
      }
      else{
        console.log(`Server running at: ${server.info.uri}`);
        status = `Server running at: ${server.info.uri}`;
      }
    });

    return status;
  }//startServer

  static stopServer(server){
    let status = '';

    server.stop((err) => {
      if(err){
        console.error(`http server stop error: ${err}`);
        status = err;
      }
      else{
        console.log('http server successfully stopped.');
        status = 'http server successfully stopped.';
      }
    });

    return status;
  }//stopServer

  static setAppConstants() {
    let contentDir =  `${__dirname}/content`;

    return {
      dbDir: `${__dirname}/db`,
      collections: `${__dirname}/db/collections`,
      imgDir: `${contentDir}/img`,
      jsDir: `${contentDir}/js`,
      htmlDir: `${contentDir}/html`,
      uploads: `${__dirname}/uploads`,
      config: {
        privateKey: `_Xk5M8\\6<p>YC#w],mK>p;"wMh/B>5X-`
      }
    }
  }//static appConstants
};
