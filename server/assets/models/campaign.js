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
  dm: {
    type: Sequelize.INTEGER,

  }
});

let Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;