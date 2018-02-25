let Database = require('../database');
let Clinic = require('../collections/clinics.collection.js');
let Accounts = require('../collections/accounts.collection.js');
let bcrypt = require('bcryptjs');

module.exports = class ClinicMigrations extends Database {
  constructor() {
    super();

  }//constructor

  generateClinics(next){
    let uniqueId = this.constructor.generateUniqueId();
    let clinic = {};

    clinic.clinic_name = `Sample clinic name - ${uniqueId}`;
    clinic.legal_id_number = uniqueId;
    clinic.address = {};
    clinic.address.street = '5734 NE 27th Ave';
    clinic.address.street_2 = 'Unit 4';
    clinic.address.city = 'Portland';
    clinic.address.state = 'Oregon';
    clinic.address.zip_code = '97211';

    Clinic.newClinic(clinic, (err, newClinic) => {
      if(err) return console.error(err);

      next();
      console.log("new clinic created:", newClinic.type, newClinic);
    });
  }//generateAccounts

  appendAccountsWithClinicId(){
    Clinic.findAll((err, clinics) => {
      let clinicId = clinics[0]._id;

      //only care about doctor accounts.
      Accounts.findByType({type: 'doctor'}, (err, accounts) => {
        if(!!err) return console.error('err');

        accounts.forEach((account, i) => {
          Accounts.updateById({_id: account._id, data: {clinic_id: clinicId}}, (err) => {
            if(!!err) return console.error(err);
            else console.log(`account with id: ${account._id} updated with clinic_id: ${clinicId}`);
          });
        });
      });
    });
  }//updateAccountsWithClinic

  static generateUniqueId(){
    let min = 1000000000;
    let max = 9999999999;

    return Math.floor(Math.random() * (max - min)) + min; //return random 9 digit int
  }//generateIMR
}
