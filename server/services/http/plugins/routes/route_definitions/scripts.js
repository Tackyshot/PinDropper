"use strict";
const fs = require('fs');

exports.register = (server, options, next) => {
  server.route({
    method: ['GET'],
    path: '/js/{script}',
    handler: (req, res) => {
      let scriptName = req.params.script;
      let script = fs.readFileSync(`${server.app.constants.jsDir}/${scriptName}`);

      res(script)
        .type('text/javascript');
    }
  });
  next();
};

exports.register.attributes = {
  name: 'scriptsHandler',
  version: '1.0.0'
};