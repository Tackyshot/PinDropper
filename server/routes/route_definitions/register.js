"use strict";
const ConnectDb = require('../../assets/helpers/connectdb');
const Bcrypt    = require('../../assets/helpers/bcrypt');
const Account   = require('../../assets/models/account');

module.exports = {
  method: ['POST'],
  path: "/register",
  config: {
    auth:{
      mode: 'try'
    },
    plugins: {
      'hapi-auth-cookie': {
        redirectTo: false
      }
    },
    handler: (req, res)=>{
      const connectdb = new ConnectDb();

      switch(req.method){
        case 'post':
          let payload = req.payload;
          connectdb.connect((done)=>{
            Account.find({username: payload.username}, (err, accounts)=>{
              if(err) console.log("REGISTER ERR:", err);
              if(payload.password !== payload.repeatPassword || payload.password === '' || typeof payload.password === 'undefined'){
                done();
                return res.redirect('/login');
              }

              if(accounts.length === 0){
                Bcrypt.hash(payload.password, (pwHash)=>{
                  let account = new Account({
                    username: payload.username,
                    password: pwHash,
                    email: payload.email
                  });

                  account.save((err, account)=>{

                    req.server.app.cache.set(String(account._id), {account: account}, 0, (err)=>{
                      if(err) return res(err);

                      req.cookieAuth.set({sid: String(account._id)});
                      done();
                      return res.redirect('/')
                    });
                  });
                });
              }
              else{
                done();
                return res.redirect('/login')
              }
            });
          });

          break;
      }

    }
  }
};