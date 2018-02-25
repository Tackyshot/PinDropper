"use strict";
const fs = require('fs');
const uuid = require('uuid');

exports.register = (server, options, next) => {
  let Surveys = require(`${server.app.constants.collections}/surveys.collection.js`);
  let Account = require(`${server.app.constants.collections}/accounts.collection.js`);

  server.route({
    method: ['GET', 'PUT', 'POST'],
    path: '/api/surveys/{surveyId?}',
    handler: (req, res) => {
      let doctor_id = req.auth.credentials._id;
      //console.log("REQUEST: ", req.method, req.payload);

      switch (req.method) {

        case 'get':
          if(!!req.params.surveyId){
            Surveys.findByIdandDoctor({id: req.params.surveyId, doctor_id: doctor_id}, (err, survey) => {
              if(!!err) console.error('api.surveys.js error:', err);

              //console.log('SURVEY:', survey);
              res(survey)
                .type('text/json');
            });
          }
          else{
            Surveys.findByDoctorId({
              doctor_id: !!req.query.doctor_id ? req.query.doctor_id : doctor_id,
              is_complete: req.query.is_complete
            }, (err, surveys) => {
              if(!!err) console.error("api.surveys.js error:", err);

              res(surveys)
                .type('text/json');
            });
          }
        break;
        case 'put':
          console.log("PUT REQUEST", req.params, req.payload);
          if(!!req.params.surveyId && req.payload.survey._id === req.params.surveyId){
            Surveys.updateSurveyById({id: req.payload.survey._id, doctor_id: doctor_id, survey: req.payload.survey}, (err, survey) => {
              if(!!err) console.error("api.surveys.js error:", err);

              res(survey)
                .type('text/json');
            });
          }
          else{
            res.code('404');
          }
        break;
        default:
          res.code('404');
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
  name: "surveys api route",
  version: "1.0.0"
};
