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

//STATIC METHODS
campaignSchema.statics.updateCampaignById = function(id, toUpdate, cb){
  return this.update({_id: id}, toUpdate, (err, campaign) => {
    if (err) {
      console.log('Error updating Campaign By Id:', campaign);
      cb(null);
    }
    else {
      cb(campaign);
    }
  });
};

campaignSchema.statics.updateNameById = function (id, name, cb) {
  return this.updateCampaignById(id, {name: name}, cb);
};

campaignSchema.statics.updateDescriptionById = function (id, description, cb) {
  return this.updateCampaignById(id, {description: description}, cb);
};

campaignSchema.statics.updateJoinCodeById = function (id, join_code, cb) {
  return this.updateCampaignById(id, {join_code: join_code}, cb);
};

campaignSchema.statics.updateDungeonMasterById = function (id, dm, cb) {
  return this.updateCampaignById(id, {dm: dm}, cb);
};

let Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;