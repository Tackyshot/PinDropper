'use strict';
const bcrypt = require('bcryptjs');

class Bcrypt {
  constructor(){
    this['bcrypt'] = bcrypt;
    this['saltRounds'] = 10;
  }

  hash(tohash, callback){
    let bcrypt = this['bcrypt'];

    if(callback){
      bcrypt.genSalt(this['saltRounds'], (err, salt)=>{
        if(err) console.log('Bcrypt Salt Error:', err);
        bcrypt.hash(tohash, salt, (err, hash)=>{
          if(err) console.log('Bcrypt Hash Error:', err);
          return callback(hash);
        })
      })
    }
    else{
      return bcrypt.hashSync(tohash, bcrypt.genSaltSync(this['saltRounds']));
    }

  }

  compare(passwd, hash, callback){
    let bcrypt = this['bcrypt'];
    if(callback){
      bcrypt.compare(passwd, hash, (err, result)=>{
        if(err) console.log('Bcrypt Compare Error:', err);
        return callback(result);
      });
    }
    else{
      return bcrypt.compareSync(passwd, hash);
    }
  }
}

module.exports = new Bcrypt();