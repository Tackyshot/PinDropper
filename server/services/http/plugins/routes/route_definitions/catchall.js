"use strict";
const fs = require('fs');
exports.register = (server, options, next) => {
  let index = fs.readFileSync(`${server.app.constants.htmlDir}/index.html`);
  server.route({
    method: ['GET'],
    path: '/{path*}',
    handler: (req, res) => {
      res(index)
        .type('text/html');
    }
  });
  next();
};

exports.register.attributes = {
  name: "catchAllRoute",
  version: "1.0.0"
};