"use strict";
const ConnectDb = require('../../assets/helpers/connectdb');
const Bcrypt    = require('../../assets/helpers/bcrypt');
const Account   = require('../../assets/models/account');

module.exports = {
  method: ['GET'],
  path: "/logout",
  handler: (req, res)=>{
    req.cookieAuth.clear();
    return res.redirect('/');
  }

};