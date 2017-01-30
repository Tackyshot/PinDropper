"use strict";
const mongoose = require('mongoose');
const Bcrypt = require('../helpers/bcrypt');

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
  },
  campaigns: {
    type: Array,
    default: [],
    required: false
  },
});

//INSTANCE METHODS
/*accountSchema.methods.newAccount = function (cb) {
  this.model('Account').save({
    username: this.username,
    password: Bcrypt.hash(this.password),
    email: this.email
  });
};*/

//STATIC METHODS
accountSchema.statics.getAccountById = function(id, cb){
  return this.find({_id: id}, (err, account) => {
    if (err) {
      console.log('Error finding account by Id:', err);
      cb(null);
    }
    else{
      cb(account);
    }
  });
};//getAccountById

accountSchema.statics.getAccountByUsername = function (username, cb) {
  return this.findOne({username: username}, (err, account) => {
    if (err) {
      console.log('Error finding account by Username:', err);
      cb(null);
    }
    else {
      cb(account);
    }
  });
};//getAccountByUsername

accountSchema.statics.updateAccountById = function(id, toUpdate, cb){
  // console.log(this);
  return this.update({_id: id}, toUpdate, (err, account) => {
    if (err) {
      console.log('Error Updating Account Password', err);
      return cb(null);
    }
    else {
      cb(account);
    }
  });
}; //updateById

accountSchema.statics.updatePasswordById = function(id, password, cb){

  return this.updateAccountById(id, {password: password}, cb);
};//updatePasswordById

accountSchema.statics.updateUsernameById = function(id, username, cb){
  return this.updateAccountById(id, {username: username}, cb);
};//updateUsernameById

accountSchema.statics.updateEmailById = function(id, email, cb) {
  return this.updateAccountById(id, {email: email}, cb);
};//updateEmailById

accountSchema.statics.assignNewCampaignById = function(id, nCampaignId, cb){
  return this.findOne({_id: id}, (err, account) => {
    if (err) {
      console.log('Error finding account to add campaign', err);
      cb(null);
    }
    else {
      let hasCampaign = false;
      account.campaigns.forEach((campaignId) => {
        if(campaignId === nCampaignId) hasCampaign = true;
      });

      if(!hasCampaign) account.campaigns.push(nCampaignId);

      return this.updateAccountById(id, {campaigns: account.campaigns}, cb);
    }
  });//findOne
};//assignNewCampaignById

accountSchema.statics.removeCampaignById = function (id, oCampaignId, cb) {
  return this.findOne({_id: id}, (err, account) => {
    if (err) {
      console.log('Error finding account to remove campaign');
      cb(null);
    }
    else {
      account.campaigns.forEach((campaignId, index) => {
        if (campaignId === oCampaignId) {
          account.campaigns.splice(index, 1);

          return this.updateAccountById(id, {campaigns: account.campaigns}, cb);
        }
      });
    }
  });
};//removeCampaignById

let Account = mongoose.model('Account', accountSchema);

module.exports = Account;