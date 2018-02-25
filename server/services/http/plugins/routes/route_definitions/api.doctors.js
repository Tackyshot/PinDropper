"use strict";
const fs = require('fs');
const uuid = require('uuid');
const blacklist = require('blacklist');

exports.register = (server, options, next) => {
  let Clinics = require(`${server.app.constants.collections}/clinics.collection.js`);
  let Account = require(`${server.app.constants.collections}/accounts.collection.js`);

  server.route({
    method: ['GET', 'PUT', 'POST'],
    path: '/api/admin/clinics/{clinicId}/doctors/{doctorId?}',
    handler: (req, res) => {
      let doctor_id = req.auth.credentials._id;
      console.log("DOCTOR REQUEST: ", req.method, req.params);

      switch (req.method) {

        case 'get':
          if(!!req.params.doctorId){
            //get specific clinic information
            Account.findById({id: req.params.doctorId, getPassword: false}, (err, doctor) => {
              if(!!err) return console.error(err);


              res(doctor)
                .type('text/json');
            });
          }
          else{
            //get list of all doctors by clinic id
            Account.findDoctorsByClinicId({clinic_id: req.params.clinicId, getPassword: false}, (err, doctors) => {
              if(!!err) return console.error(err);

              res(doctors)
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
  name: "doctors api route",
  version: "1.0.0"
};
