"use strict";

exports.register = (server, options, next) => {
  server.route({
    method: ['GET'],
    path: '/img/{image}',
    handler: (req, res) => {
      let imageName = req.params.image;
      let image = fs.readFileSync(`${server.app.constants.imgDir}/${imageName}`);

      res(image)
        .type(`image/${imageName.split('.').pop()}`);
    }
  });
  next();
};

exports.register.attributes = {
  name: 'imageRoute',
  version: '1.0.0'
};