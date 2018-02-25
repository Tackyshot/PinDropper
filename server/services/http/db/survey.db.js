module.exports = {
  survey: {
    id: 'f64746ae-0213-43ec-bd4f-d7bb5aa186be',
    account_id: 'd227290b-c8ac-42d6-a3ca-e0aa0252e5ba',
    is_complete: 'boolean',
    lab_info:{
      lab_id: '36c7cb25-3eac-417b-bdf8-f86385950b92',
      name: 'string',
      imr: 'number',
      case_number: 'number or string'
    },
    patient_info:{
      sex: 0,
      dob: '06/20/1980',
      race: 'white',
      height: {
        ft: '6',
        in: '30'
      },
      weight: 190
    },
    questions:[
      {
        id: '474eb61a-340a-43d1-91c9-eec81a045940',
        order: 1,
        text: 'Do you feel satisfied with the information, and follow up provided with our PGx testing?',
        type: 'boolean',
        answer: null,
      },
      {
        id: 'a2ef219f-6aeb-4bba-8779-5c8cb7ac32bf',
        order: 2,
        text: 'Was it easy to follow through with the clinical information provided after the testing results came back?',
        type: 'boolean',
        answer: null,
      },
      {
        id: '44c7b693-7336-45b2-ad4e-580d1199999f',
        order: 3,
        text: 'Did the patient have genetic polymorphisms revealed on testing that changes their metabolism of drugs?',
        type: 'boolean',
        answer: null,
      },
      {
        id: 'fee5bd86-a162-4be6-b10d-cc5fb7c3b989',
        order: 4,
        text: 'Were there any suggested changes to the patient’s drug regimen based on the test results?',
        type: 'boolean',
        answer: null,
      }
    ]
  }
};