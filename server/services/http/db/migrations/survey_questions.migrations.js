let Database = require('../database');
let SurveyQuestions = require('../collections/survey_questions.collection');

module.exports = class SurveyQuestionMigrations extends Database {
  constructor() {
    super();

    let schema = {
      //will have _id: key that is ObjectId
      questions:[
        {
          q_order: Number,
          text: String,
          question_type: String,
          sub_questions: [
            {
              order: Number,
              text: String,
              condition: Boolean, //the condition that the ANSWER of the parent question must meet to be visible
              question_type: String
            }
          ]
        }
      ]
    }
  }//constructor

  generateSurveyQuestions(next){
    let questions = this.constructor.getQuestions();

    SurveyQuestions.newQuestionSet(questions, (err, questionSet) => {
      if(!!err) console.error('generateSurveyQuestions:', err);

      next();
      console.log("successfully created new Survey Question Set with id:", questionSet._id);
    });
  }//generateSurveyQuestions

  static getQuestions(){
    return {
      survey_name: 'Lab Efficacy Survey',
      questions: [
        {
          question_order: 1,
          text: 'Do you feel satisfied with the information, and follow up provided with our PGx testing?',
          question_type: 'boolean',
        },
        {
          question_order: 2,
          text: 'Was it easy to follow through with the clinical information provided after the testing results came back?',
          question_type: 'boolean',
        },
        {
          question_order: 3,
          text: 'Did the patient have genetic polymorphisms revealed on testing that changes their metabolism of drugs?',
          question_type: 'boolean',
        },
        {
          question_order: 4,
          text: 'Were there any suggested changes to the patient’s drug regimen based on the test results?',
          question_type: 'boolean',
          sub_questions:[
            {
              question_order: 1,
              text: 'Did you add or subtract any medications based upon these test results?',
              question_type: 'boolean',
              condition: true,
            },
            {
              question_order: 2,
              text: 'Did you change a dose of medication(s) based on these test results?',
              question_type: 'boolean',
              condition: false,
            }
          ]
        },
        {
          question_order: 5,
          text: 'List any medications (if any) that you changed based on this testing information.',
          question_type: 'multi-text',
        },
        {
          question_order: 6,
          text: 'In your clinical opinion, did this test minimize the risk of unexpected mobilization of certain substances?',
          question_type: 'boolean',
        },
        {
          question_order: 7,
          text: 'Did the test result increase your confidence in medication(s) you have been previously prescribing to the patient?',
          question_type: 'boolean',
        },
        {
          question_order: 8,
          text: 'In your professional opinion, were the test results helpful to you in making more informed decisions regarding the treatment of the patient?',
          question_type: 'boolean',
        },
        {
          question_order: 9,
          text: 'Were you able to decrease adverse effects, drug-drug interactions based on the test results?',
          question_type: 'boolean',
        },
        {
          question_order: 10,
          text: 'In your professional opinion, was it both medically necessary and in the best interest of the patient to order the test?',
          question_type: 'boolean',
        },
        {
          question_order: 11,
          text: 'In your professional opinion, do you believe that in the long term this test will lower the over-all cost of healthcare?',
          question_type: 'boolean'
        },
        {
          question_order: 12,
          text: 'Did the patient appreciate or value changes made based on genetic testing and the individualization of their treatment?',
          question_type: 'boolean',
        },
        {
          question_order: 13,
          text: 'Would you recommend PGx testing to your colleagues/other physicians?',
          question_type: 'boolean'
        }
      ] //questions:
    };//let questions
  }//getQuestions
}
