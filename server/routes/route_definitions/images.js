"use strict";
module.exports  = {
  method: ['GET'],
  path: "/img/{image}",
  handler: (req, res)=>{
    const fs = require('fs');

    let file = fs.readFileSync(__dirname + '/../../assets/client/img/' + req.params.image);

    res(file).type("application/javascript");

  }//handler
}
