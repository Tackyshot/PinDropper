"use strict";
const fs = require('fs');
const uuid = require('uuid');

exports.register = (server, options, next) => {
  let Clinics = require(`${server.app.constants.collections}/clinics.collection.js`);
  let Account = require(`${server.app.constants.collections}/accounts.collection.js`);

  server.route({
    method: ['GET', 'PUT', 'POST'],
    path: '/api/admin/clinics/{clinicId?}', //http://localhost.com/api/clinic/
    handler: (req, res) => {
      let doctor_id = req.auth.credentials._id;
      console.log("REQUEST: ", req.method, req.payload);

      switch (req.method) {

        case 'get':
          if(!!req.params.clinicId){
            //get specific clinic information
            Clinics.findById({id: req.params.clinicId}, (err, clinic) => {
              if(!!err) return console.error(err);;

              res(clinic)
                .type('tet/json');
            });
          }
          else{
            //get list of all clinics
            Clinics.findAll((err, clinics) => {
              if(!!err) return console.error(err);

              res(clinics)
                .type('text/json');
            });
          }

        break;
        case 'put':

        break;
        default:

        break;

      }
    },//handler
    config: {
      auth: {
        mode: 'required',
        strategy: 'token'
      },
    }//config
  });
  next();
};

exports.register.attributes = {
  name: "clinics api route",
  version: "1.0.0"
};
