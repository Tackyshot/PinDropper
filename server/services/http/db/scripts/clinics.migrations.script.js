const ClinicMigrations = require('../migrations/clinics.migrations');

function migration(){
  let Migration = new ClinicMigrations();

  Migration.generateClinics();
  Migration.appendAccountsWithClinicId();
}

module.exports = migration();
