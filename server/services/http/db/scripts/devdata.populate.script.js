'use strict'
const ClinicMigrations = require('../migrations/clinics.migrations');
const AccountsMigrations = require('../migrations/accounts.migrations');
const SurveyQuestionsMigrations = require('../migrations/survey_questions.migrations');
const SurveysMigrations = require('../migrations/surveys.migrations');

function migration(){
  let ClinicMigration = new ClinicMigrations();
  let AccountsMigration = new AccountsMigrations();
  let SurveyQuestionsMigration = new SurveyQuestionsMigrations();
  let SurveysMigration = new SurveysMigrations();

  ClinicMigration.generateClinics(() => {
    AccountsMigration.generateAccounts(() => {
      SurveyQuestionsMigration.generateSurveyQuestions(() => {
        SurveysMigration.generateSurveys();
      });
    });
  });

}

module.exports = migration();
