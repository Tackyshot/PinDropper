"use strict";
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
    handler: (request, reply)=>{
      const users = {
        john: {
          id: 'john',
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

        return reply('<html><head><title>Login page</title></head><body>' +
          (message ? '<h3>' + message + '</h3><br/>' : '') +
          '<form method="post" action="/login">' +
          'Username: <input type="text" name="username"><br>' +
          'Password: <input type="password" name="password"><br/>' +
          '<input type="submit" value="Login"></form></body></html>');
      }

      const sid = String(++uuid);
      request.server.app.cache.set(sid, { account: account }, 0, (err) => {

        if (err) {
          reply(err);
        }

        request.cookieAuth.set({ sid: sid });
        return reply.redirect('/');
      });

    }
  }
};