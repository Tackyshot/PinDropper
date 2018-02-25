'use strict';
let Database = require('../database');
let Surveys = require('../collections/surveys.collection');
let Accounts = require('../collections/accounts.collection');
let SurveyQuestions = require('../collections/survey_questions.collection');

module.exports = class SurveysMigration extends Database {
  constructor() {
    super();
    this.survey_names = ['Heart Pro Lab', 'Intestine tract lab', 'drug and alcohol panel', 'Respiratory lab', 'Brain scan lab', 'poison screening'];
  }

  generateSurveys(){
    this.survey_names.forEach((survey_name, i) => {
      Accounts.findByType({type: 'lab'}, (err, labs) => {
        if(err) return console.error(err);

        let lab = labs[0];

        Accounts.findByType({type: 'doctor'}, (err, doctors) => {
          if(err) return console.error(err);

          let doctor = doctors[0];

          SurveyQuestions.findBySurveyName('Lab Efficacy Survey', (err, surveyQuestions) => {
            let newSurvey = Surveys.createNewSurvey({
              survey_name: survey_name,
              doctor_id: doctor._id,
              lab_id: lab._id,
              survey_id: surveyQuestions._id,
              case_number: this.constructor.generateCaseNo(),
              is_complete: false,
            }, (err, survey) => {
              if(!!err) console.error(err);
              else console.log('new survey successfully generated with id:', survey._id);
            });
          });//SQ.findBySurveyName
        }); //Acc.findByType2
      }); //Acc.findByType1
    });
  }//GenerateSurveys

  static generateCaseNo(){
    let min = 1000000000;
    let max = 9999999999;

    return Math.floor(Math.random() * (max - min)) + min; //return random 9 digit int
  }//generateCaseNo
}
