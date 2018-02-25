"use strict";
const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const transform = require('stream-transform');

exports.register = (server, options, next) => {
  let SurveyQuestions = require(`${server.app.constants.collections}/survey_questions.collection.js`);
  let Surveys = require(`${server.app.constants.collections}/surveys.collection.js`);
  let Account = require(`${server.app.constants.collections}/accounts.collection.js`);

  server.route({
    method: ['POST'],
    path: '/api/upload/surveys',
    handler: (req, res) => {
      let payload = req.payload;
      let keys = Object.keys(req.payload)
      let doctor_id = req.payload.doctor_id;
      let survey_id = req.payload.survey_id;
      let lab_id = req.payload.lab_id;
      let files_count = req.payload.files_count;

      switch (req.method) {
        case 'post':
          let output = {};
          let streamPos = keys.length - files_count; //-1 offset because array.

          keys.forEach((key, i) => {
            if(i >= streamPos){

              payload[key].on('readable', () => {
                let csvUpload = payload[key].read().toString();
                let parsedCsv = parse(csvUpload, {});

                output[key] = reformatCsv(pruneCsv(parsedCsv));
              });

            }
          });//forEach

          let timer = setInterval(() => {
            if(Object.keys(output).length == files_count){
              clearTimeout(timer);

              createNewSurveys(output, {doctor_id: doctor_id, survey_id: survey_id, lab_id: lab_id}, (newSurveys) => {
                res(newSurveys);

              });

            }
          }, 100);
        break;
        default:
          res.code('404');
        break;
      }

      let pruneCsv = (csvData) => {
        let headerRowIndex = csvData.findIndex((csvRow, i) => {
          return (
            csvRow[0].toLowerCase().replace(/ /g,'') == 'lastname' &&
            csvRow[1].toLowerCase().replace(/ /g,'') == 'firstname' &&
            csvRow[2].toLowerCase().replace(/ /g,'') == 'dos' &&
            csvRow[3].toLowerCase().replace(/ /g,'') == 'inscompany' &&
            csvRow[4].toLowerCase().replace(/ /g,'') == 'deduct' &&
            csvRow[5].toLowerCase().replace(/ /g,'') == 'coins' &&
            csvRow[6].toLowerCase().replace(/ /g,'') == 'paid' &&
            csvRow[7].toLowerCase().replace(/ /g,'') == 'checkdate' &&
            csvRow[8].toLowerCase().replace(/ /g,'') == 'comments'
          )
        });
        let finalDataRow = csvData.findIndex((csvRow, i) => {
          return (
            csvRow[0] == '' &&
            csvRow[1] == '' &&
            csvRow[2] == '' &&
            csvRow[3] == '' &&
            csvRow[4] == '' &&
            csvRow[5] == '' &&
            csvRow[6] == '' &&
            csvRow[7] == '' &&
            csvRow[8] == '' &&
            i > headerRowIndex
          )
        });

        //prune everything before header and everything after last data set
        return csvData.slice(headerRowIndex, finalDataRow);
      }//pruneCsv fn

      let reformatCsv =  (csvData) => {
        let csvObj = []

        csvData.forEach((csvRow, i) => {
          if(i > 0){
            csvObj.push({
              'last_name': csvRow[0],
              'first_name': csvRow[1],
              'date_of_service': csvRow[2],
              'ins_company': csvRow[3],
              'deductable': csvRow[4],
              'co_ins': csvRow[5],
              'amount_paid': csvRow[6],
              'check_date': csvRow[7],
              'comments': csvRow[8],
            });
          }
        });

        return csvObj;
      }//reformatCsv fn

      let createNewSurveys = (csvUpload, options, next) => {
        let files = Object.keys(csvUpload);
        let doctor_id = options.doctor_id;
        let newSurveys = [];

        //NOTE: unused vars in prep for more feature additions
        // let survey_id = options.survey_id;
        // let lab_id = options.lab_id;

        Account.findByType({type: 'lab'}, (err, labs) => { //NOTE: obsolete with new feature vars
          if (!!err) console.error(err);
          let lab_id = labs[0]._id;

          SurveyQuestions.findFirst((err, surveyQuestions) => { //NOTE: obsolete with new feature vars
            if(!!err) console.error(err);

            let survey_id = surveyQuestions._id;
            files.forEach((file, i) => {
              csvUpload[file].forEach((csvRecord, j) => {
                let survey = {
                  doctor_id: doctor_id,
                  lab_id: lab_id,
                  survey_id: survey_id,
                  survey_name: `${csvRecord.first_name} ${csvRecord.last_name} - ${csvRecord.date_of_service}`,
                  case_number: `${csvRecord.first_name.charAt(0)}${csvRecord.last_name}.${csvRecord.ins_company}`,
                  is_complete: false,
                  patient_meta: csvRecord,
                };

                 Surveys.createNewSurvey(survey, (err, newSurvey) => {
                  if (!!err) console.error(err);
                  if(files.length === (i+1) && csvUpload[file].length === (j+1)){
                    newSurveys.push(survey);
                    return next(newSurveys);
                  }

                  newSurveys.push(survey);
                });//Surveys.createNewSurvey
              });//csvUpload.forEach
            });//files.forEach
          });//SurveyQuestions.findFirst

        });//Account.findByType

      }

    },//handler
    config: {
      auth: {
        mode: 'required',
        strategy: 'token'
      },
      payload:{
        parse: true,
        output: 'stream',
        //allow: 'multipart/form-data'
      }
    }//config
  });
  next();
};

exports.register.attributes = {
  name: "upload surveys api route",
  version: "1.0.0"
};
