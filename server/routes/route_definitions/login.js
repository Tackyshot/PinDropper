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
              if (err) console.log('REGISTER ERR:', err);
              if (account === null) return res(fs.readFileSync(dir)).type('text/html');

              Bcrypt.compare(payload.password, account.password, (isSamePw)=>{
                if(isSamePw){
                  req.server.app.cache.set(String(account._id), { account: account }, 0, (err) => {
                    if (err) return res(err);

                    req.cookieAuth.set({ sid: account._id });
                    return res.redirect('/');
                  });
                }
                else{
                  return res(fs.readFileSync(dir)).type('text/html');
                }
                done();
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
    },
    /*handla: (request, reply)=>{
      /!*EVERYTHING AFTER THIS LINE WILL BE DESTROYED*!/
      const users = {
        john: {
          id: 'dillbill',
          password: 'password',
          name: 'John Doe'
        }
      };
      let uuid = 1;

      if (request.auth.isAuthenticated) {
        return reply.redirect('/');
      }

      let message = '';
      let account = null;

      if (request.method === 'post') {

        if (!request.payload.username ||
          !request.payload.password) {

          message = 'Missing username or password';
        }
        else {
          account = users[request.payload.username];
          if (!account ||
            account.password !== request.payload.password) {

            message = 'Invalid username or password';
          }
        }
      }

      if (request.method === 'get' ||
        message) {

        return reply(fs.readFileSync(dir))
          .type('text/html');
      }

      const sid = String(++uuid);
      request.server.app.cache.set(sid, { account: account }, 0, (err) => {

        if (err) {
          return reply(err);
        }

        request.cookieAuth.set({ sid: sid });
        return reply.redirect('/');
      });

    }*/
  }
};