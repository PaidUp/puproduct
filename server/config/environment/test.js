'use strict'

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/convenience-test',
    options: {
    }
  },
  nodePass: {
    me: {
      token: 'tdschedule-secret'
    }
  },
  logger: {
    logName: 'pu-product-test-log'
  }
}
