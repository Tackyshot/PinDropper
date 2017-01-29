'use strict';
const ConnectDb = require('../helpers/connectdb');
const Account = require('../models/account');
const Campaign = require('../models/campaign');
const Character = require('../models/character');
const CharData = require('../data/newCharacter');

const Bcrypt = require('../helpers/bcrypt');

class TestAccountMigration {
  constructor(){
    const connectdb = new ConnectDb();
    let testUser = new Account({
      username: 'testuser',
      password: Bcrypt.hash('1234'),
      email: 'testemail@test.com'
    });

    connectdb.connect((done)=>{
      testUser.save((err, user)=>{
        if(err) console.error('Test account error:', err, user), done();
        else {
          console.log('Created test account:', user);

          let testCampaign = new Campaign({
            name: 'Test Campaign',
            description: 'This is a migrated test campaign',
            dm: user._id
          });

          testCampaign.save((err, campaign)=>{
            if(err) console.error('Test campaign migration error:', err, campaign), done();
            else{
              console.log('Created test campaign:', campaign);
              CharData.account = user._id;
              CharData.campaign = campaign._id;

              let testCharacter = new Character(CharData);

              testCharacter.save((err, character)=>{
                if(err) console.error('test character migration error:', err, character), done();
                else{
                  console.log('Created test character');

                  done();
                }
              })
            }
          })
        }
      })
    })
  }
}

module.exports = new TestAccountMigration();