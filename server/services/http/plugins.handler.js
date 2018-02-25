"use strict";
const fs = require('fs');

exports.register = (server, options, next) => {
  //this is a plugin that loads and registers all of the plugins for the HTTP server.
  let pluginsList = fs.readdirSync(`${__dirname}/plugins/`).filter((plugin) => {
    if(plugin.charAt(0) !== '.') return plugin;
  });
  console.log('HTTP PLUGINS LIST:', pluginsList);
  pluginsList.forEach((pluginName) => {
    server.register(require(`${__dirname}/plugins/${pluginName}/${pluginName}.js`), (err) => {
      if(err) throw err;
    });
  });

  next();
};

exports.register.attributes = {
  name: 'pluginHandler',
  version: '1.0.0'
};