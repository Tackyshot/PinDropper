"use strict";
const mongoose = require('mongoose');
const Database = require('../database');

class Accounts extends Database{
  constructor() {
    super();
    let Schema = mongoose.Schema;
    let accountSchema = new Schema({
      username: {type: String, lowercase: true, trim: true, required: '{PATH} is required'},
      email: {type: String, lowercase: true, trim: true, required: '{PATH} is required'},
      password: {type: String, required: '{PATH} is required'},
      date_joined: {type: Date, default: Date.now},
    });

    this.model = mongoose.model('Account', accountSchema);
  }//constructor

  newAccount(data, next) {
    this.connect().then((db) => {
      let Account = this.model;
      let newUser = new Account(data);

      newUser.save(function (err) {
        if(!!err) console.error(err);
        next(err, newUser);
      });
    });
  }//newAccount

  findByEmail(params, next) {
    this.connect().then((db) => {
      let Account = this.model;

      Account
      .findOne()
      .where('email').equals(params.email)
      .exec((err, account) => {
        if(!!err) console.error(err);

        next(err, account);
      });
    })
  }//findByEmail

  findById(params, next) {
    this.connect().then((db) => {
      let Account = this.model;

      Account
      .findOne()
      .where('_id').equals(params._id)
      .select(`${!!params.getPassword ? '' : '-password'}`)
      .exec((err, account) => {
        if(!!err) console.error(err);

        next(err, account);
      });
    })
  }//findById

  updateById(params, next) {
    this.connect().then((db) => {
      let Account = this.model;

      Account
      .where('_id').equals(params._id)
      .update({$set: params.data})
      .exec((err, raw) => {
        if(!!err) console.log(err);

        console.log("Updated:", raw);
        next(err, raw);
      })
    })
  }//updateById

  updatePasswordById(params, next) {
    this.connect().then((db) => {
      let Account = this.model;

      Account
      .where('_id').equals(params._id)
      .update({$set: {password: params.password}})
      .exec((err, raw) => {
        if(!!err) console.log(err);

        next(err, raw);
      });

    })
  }//updatePasswordByID

}

module.exports = new Accounts();
