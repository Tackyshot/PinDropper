"use strict";
const mongoose = require('mongoose');
const Database = require('../database');

class Campaigns extends Database{
  constructor() {
    super();
    let Schema = mongoose.Schema;
    let campaignSchema = new Schema({
      campaign_name: {type:String, required: '{PATH} is required'},
      campaign_description: {type: String},
      campaign_edition: {type: String, lowercase: true, trim: true},
      campaign_owner: {type: Schema.ObjectId, ref: 'Account'},
      campaign_players: [
        {type: Schema.ObjectId, ref: 'Account'}
      ],
      date_created: {type: Date, default: Date.now},
      campaign_journal:{ //journal for the DM to record people places and objects
        people:[
          {
            person_name:{type:String},
            person_description:{type:String}
          }
        ],
        places: [
          {
            place_name:{type:String},
            person_description:{type:String}
          }
        ],
        events: [
          {
            event_name:{type:String},
            event_description:{type: String}
          }
        ],
        miscellaneous:[
          {
            misc_name: {type:String},
            misc_description: {type: String}
          }
        ]
      }
    });

    this.model = mongoose.model('Campaign', campaignSchema);
  }//constructor

  newCampaign(data, next) {
    this.connect().then((db) => {
      let Campaign = this.model;
      let newCampaign = new Campaign(data);

      newCampaign.save(function (err) {
        if(!!err) console.error(err);
        next(err, newCampaign);
      });
    });
  }//newAccount

  findById(params, next) {
    this.connect().then((db) => {
      let Campaign = this.model;

      Campaign
      .findOne()
      .where('_id').equals(params._id)
      .exec((err, campaign) => {
        if(!!err) console.error(err);

        next(err, campaign);
      });
    })
  }//findById

  updateById(params, next) {
    this.connect().then((db) => {
      let Campaign = this.model;

      Campaign
      .where('_id').equals(params._id)
      .update({$set: params.data})
      .exec((err, raw) => {
        if(!!err) console.log(err);

        console.log("Updated:", raw);
        next(err, raw);
      })
    })
  }//updateById

}

module.exports = new Campaigns();
