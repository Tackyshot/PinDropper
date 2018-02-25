module.exports = {
  survey: {
    id: 'uuid-string',
    account_id: 'uuid-string',
    is_complete: 'boolean',
    lab_info:{
      lab_id: 'uuid-string',
      name: 'string',
      imr: 'number',
      case_number: 'number or string'
    },
    patient_info:{
      sex: 'boolean string',
      dob: 'date string',
      race: 'string',
      height: 'number',
      weight: 'number'
    },
    questions:[
      {
        id: 'uuid-string',
        order: 'number',
        text: 'string, title of question',
        type: 'string identifier',
        subquestions:[{
          id: ''
        }]
      }
    ]
  }
}