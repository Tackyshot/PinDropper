/*
 * This File is intended to *EVENTUALLY* scale to handle multiple services via a custom CLI.
 * For now it will simply start and stop the http server (as an external service) when run via node CLI.
 */

'use strict';
const fs = require('fs');

class Application {
  constructor(setting) {
    const settings = !!setting ? setting : null;
    const services = this.constructor.getServices();
    const activeServices = {};

    this.startService = (service) => this.constructor.start(services, activeServices, service);
    this.stopService = (service) => this.constructor.stop(activeServices, service);

  }//constructor
  
  static getServices(){
    let services = {};
    let servicesList = fs.readdirSync(`${__dirname}/services`).filter((service) => {
      if(service.charAt(0) !== '.') return service;
    });
console.log('SERVICES:', servicesList);
    servicesList.forEach((service, i) => {
      if(typeof services[service] === 'undefined'){
        services[service] = require(`${__dirname}/services/${service}/${service}.js`);
      }
    });

    return services;
  }//getServices

  static start(services, activeServices, service) {
    if(!!activeServices[service]) delete activeServices[service];
    activeServices[service] = new services[service]().start();
  }//static start

  static stop(activeServices, service) {
    activeServices[service].stop();
    delete activeServices[service];
  }//static stop

};

module.exports = new Application().startService('http');

