let Database = require('../database');
let Accounts = require('../collections/accounts.collection');
const Clinic = require('../collections/clinics.collection.js');
let bcrypt = require('bcryptjs');

module.exports = class AccountMigrations extends Database {
  constructor() {
    super();
    this.names = [
      {
        first_name: 'mo',
        middle_name: 'g',
        last_name: 'sweeny',
        type: 'doctor',
      },
      {
        lab_name:'Some Random Lab Name',
        type: 'lab',
      },
      {
        first_name: 'dillon',
        middle_name: 'm',
        last_name: 'osman',
        type: 'admin',
      }
    ];

  }//constructor

  generateAccounts(next){
    let imr_number = this.constructor.generateIMR;
    Clinic.findAll((err, clinics) => {
      this.clinic_id = clinics[0]._id;
    });

    this.names.forEach((name, i) => {
      let account = {};

      account.type = name.type;

      if (name.type === 'doctor' || name.type === 'admin') {

        account.first_name = name.first_name;
        account.middle_name = name.middle_name;
        account.last_name = name.last_name;
        account.email = `${name.first_name.trim()}.${name.last_name.trim()}@fakeemail.com`;
        if(name.type == 'doctor'){
          console.log('clinicId:', this.clinic_id);
           account.clinic_id = this.clinic_id;
        }

      }

      if(name.type === 'lab'){
        account.lab_name = name.lab_name;
        account.imr_number = imr_number();
        account.email = `lab-${i}@fakeemail.com`;
      }

      account.password = bcrypt.hashSync(`${name.type}-1234`, bcrypt.genSaltSync(10));

      Accounts.newAccount(account, (err, newAccount) => {
        if(err) return console.error(err);

        console.log("new account created:", newAccount.type, newAccount);
      });
    });

    next();
  }//generateAccounts

  static generateIMR(){
    let min = 1000000000;
    let max = 9999999999;

    return Math.floor(Math.random() * (max - min)) + min; //return random 9 digit int
  }//generateIMR
}
