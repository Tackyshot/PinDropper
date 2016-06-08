'use strict';
const bcrypt = require('bcryptjs');

class Bcrypt {
  constructor(){
    this['bcrypt'] = bcrypt;
    this['saltRounds'] = 10;
  }

  hash(tohash, callback){
    let bcrypt = this['bcrypt'];
    bcrypt.genSalt(this['saltRounds'], (err, salt)=>{
      if(err) console.log('Bcrypt Salt Error:', err);
      bcrypt.hash(tohash, salt, (err, hash)=>{
        if(err) console.log('Bcrypt Hash Error:', err);
        return callback(hash);
      })
    })
  }

  compare(passwd, hash, callback){
    let bcrypt = this['bcrypt'];
    bcrypt.compare(passwd, hash, (err, result)=>{
      if(err) console.log('Bcrypt Compare Error:', err);
      return callback(result);
    });
  }
}

module.exports = new Bcrypt();