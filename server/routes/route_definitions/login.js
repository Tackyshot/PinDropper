"use strict";
const fs        = require('fs');
const ConnectDb = require('../../assets/helpers/connectdb');
const Bcrypt    = require('../../assets/helpers/bcrypt');
const Account   = require('../../assets/models/account');
const dir       = __dirname + '/../../assets/client/views/login.html';

module.exports = {
  method: ['GET', 'POST'],
  path: "/login",
  config: {
    auth: {
      mode: 'try'
    },
    plugins: {
      'hapi-auth-cookie': {
        redirectTo: false
      }
    },
    handler: (req, res)=> {
      if (req.auth.isAuthenticated) {
        return res.redirect('/');
      }

      switch (req.method) {
        case 'post':
          let payload = req.payload;
          let connectdb = new ConnectDb();

          connectdb.connect((done)=> {
            Account.findOne({username: payload.username}, (err, account)=> {
              if (err) done(), console.log('LOGIN ERR:', err);
              if (account === null) {
                console.log("Invalid login: Account not found");
                done();
                return res(fs.readFileSync(dir)).type('text/html');
              }

              Bcrypt.compare(payload.password, account.password, (isSamePw)=>{
                if(isSamePw){
                  req.server.app.cache.set(String(account._id), { account: account }, 0, (err) => {
                    if (err) {
                      done();
                      return res(err);
                    }

                    done();
                    req.cookieAuth.set({ sid: account._id });
                    return res.redirect('/');
                  });
                }
                else{
                  console.log("Invalid login: Incorrect credentials");
                  done();
                  return res(fs.readFileSync(dir)).type('text/html');
                }
              }); //bcrypt compare
            }); //account find
          }); //dbconnect
        break;

        case 'get':
          //simpply send the data
          return res(fs.readFileSync(dir))
            .type('text/html');
        break;
      };
    }
  }
};