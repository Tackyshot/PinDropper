"use strict";
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

let accountSchema = Schema({
//  _id: Schema.ObjectId,
  username: {
    type: String,
    default: '',
    required: true
  },
  password: {
    type: String,
    default: '',
    required: true
  },
  email: {
    type: String,
    default: '',
    required: true
  }
});

let Account = mongoose.model('Account', accountSchema);

module.exports = Account;