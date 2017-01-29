"use strict";
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

let campaignSchema = Schema({
  name: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  join_code:{
    type: String,
    default: ''
  },
  dm: {
    type: String,

  }
});

let Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;