"use strict";
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

let accountSchema = Schema({
//  _id: Schema.ObjectId,
  username: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  }
});

let Account = mongoose.model('Account', accountSchema);

module.exports = Account;