"use strict";
const mongoose = require('mongoose');
const Database = require('../database');

class Characters extends Database{
  constructor() {
    super();
    let Schema = mongoose.Schema;
    let characterSchema = new Schema({
      account_id: {type: Schema.ObjectId, ref: 'Account'},
      campaign_id: {type: Schema.ObjectId, ref: 'Campaign'},
      is_npc: {type: Boolean, default: false},
      persona: {
        character_name: {type:String, required: '{PATH} is required', default: ''},
        character_description: {type: String, default: ''},
        character_personality_traits: {type: String, default: ''},
        character_ideals: {type:String, default: ''},
        character_bonds: {type:String, default: ''},
        character_flaws: {type:String, default: ''},
      },
      base_stats:{
        ability_scores:{
          strength: {type: Number, default: 10},
          dexterity: {type: Number, default: 10},
          constitution: {type: Number, default: 10},
          intelligence: {type: Number, default: 10},
          wisdom: {type: Number, default: 10},
          charisma: {type: Number, default: 10}
        },
        speed: {type: Number, default: 30},
        size: {type: String, default: 'medium'},
        race: {
          race_name: {type: String},
          effects: [
            {
              effect_type: {type: String},
              effect_value: {type: Schema.Mixed}
            }
          ]
        },
        age: {type: Number},
        health:{
          current_health: {type: Number, default: 0},
          maximum_health: {type: Number, default: 0}
        },
        classes: [
          {
            class_name: {type: String}, //eg: Wizard
            class_level: {type: Number} //eg: 1
          }
        ],
        experience: {type: Number},
        conditions: [String], //blinded, unconcious, etc.
      },
      date_created: {type: Date, default: Date.now},
      containers:[ //default should be: equipment, carried, coin_pouch
        {
          container_name: {type: String},
          container_weight: {type: Number},
          container_value: {type: Number},
          container_description: {type: String},
          is_carried: {type: Boolean},
          ignore_internal_weight: {type: Boolean},
          container_money: {
            gold: {type: Number},
            silver: {type: Number},
            copper: {type: Number},
          }
        }
      ],
      inventory:[
        {
          item_name: {type: String},
          item_quantity: {type: Number},
          item_weight: {type: Number},
          item_value: {type: Number},
          item_description: {type: String},
          container_id: {type: Schema.ObjectId}, //the id of the container that it belongs to.
          effects: [
            {
              effect_type: {type: String},
              effect_value: {type: Schema.Mixed}
            }
          ],
          attacks: [
            { //all (except details) are formatted strings to be parsed and calculated
              attack_bonus: {type: String},
              attack_damage: {type: String},
              damage_type: {type: String},
              details: {type: String},
            }
          ]
        }
      ],//inventory
      spell_lists:[ //default should be: Cantrips, Level 1 Spells
        {
          spell_list_name: {type: String},
          spell_list_description: {type: String},
          max_prepared: {type: Number}
        }
      ],
      spells:[
        {
          spell_name: {type: String},
          spell_description: {type: String},
          spell_level: {type: Number},
          spell_school: {type: String},
          spell_prepared: {type: Boolean},
          cast_time: {type: String},
          spell_range: {type: Number},
          spell_components: {
            verbal: {type: Boolean},
            somatic: {type: Boolean},
            material: {type: String}
          },
          spell_duration: {type: String},
          spell_requires_concentration: {type: Boolean},
          spell_description: {type: String},
          effects: [
            {
              effect_type: {type: String},
              effect_value: {type: Schema.Mixed}
            }
          ],
          attacks: [
            { //all (except details) are formatted strings to be parsed and calculated
              attack_bonus: {type: String},
              attack_damage: {type: String},
              damage_type: {type: String},
              details: {type: String},
            }
          ]
        }
      ], //spells
      character_feats: [
        {
          feat_name: {type: String},
          feat_description: {type: String},
          effects:[
            {
              effect_type: {type: String},
              effect_value: {type: Schema.Mixed}
            }
          ]
        }
      ],
      character_journal: {
        people: [
          {
            name: {type: String},
            short_description: {type: String},
            long_description: {type: String}
          }
        ],
        places: [
          {
            name: {type: String},
            short_description: {type: String},
            long_description: {type: String}
          }
        ],
        events: [
          {
            name: {type: String},
            short_description: {type: String},
            long_description: {type: String}
          }
        ],
        miscellaneous: [
          {
            name: {type: String},
            short_description: {type: String},
            long_description: {type: String}
          }
        ],
        private: [ //this section is hidden from the DM.
          {
            name: {type: String},
            short_description: {type: String},
            long_description: {type: String}
          }
        ],
      }
    });

    this.model = mongoose.model('Character', characterSchema);
  }//constructor

  newCampaign(data, next) {
    this.connect().then((db) => {
      let Character = this.model;
      let newCharacter = new Character(data);

      newCharacter.save(function (err) {
        if(!!err) console.error(err);
        next(err, newCharacter);
      });
    });
  }//newAccount

  findById(params, next) {
    this.connect().then((db) => {
      let Character = this.model;

      Character
      .findOne()
      .where('_id').equals(params._id)
      .exec((err, character) => {
        if(!!err) console.error(err);

        next(err, character);
      });
    })
  }//findById

  updateById(params, next) {
    this.connect().then((db) => {
      let Character = this.model;

      Character
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

module.exports = new Characters();
