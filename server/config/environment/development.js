'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://ec2-54-144-47-102.compute-1.amazonaws.com/jsonconfigprovider-dev'
  },

  // Seed database on startup
  seedDB: true

};
