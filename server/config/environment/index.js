'use strict'

const path = require('path')
const _ = require('lodash')

// All configurations will extend these options
// ============================================
let all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(path.join(__dirname, '/../../..')),

  // Server port
  port: process.env.PORT || 9007,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'puproduct-secret'
  },

  nodePass: {
    me: {
      'token': 'puproduct-secret'
    }
  },
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/convenience-dev',
    options: {
      db: {
        safe: true
      },
      prefix: 'puproduct_'
    }
  },

  logger: {
    level: {
      info: 'info',
      warn: 'warn',
      error: 'error'
    },
    loggly: {
      inputToken: 'e2834f96-0326-43f1-8fd9-04dd669a11ef',
      subdomain: 'cstest',
      tags: ['PUProduct'],
      level: 'error'
    }
  },
  encryptKey: 'PZ3oXv2v6Pq5HAPFI9NFbQ=='
}

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = all
module.exports = _.merge(
  all,
  require('./' + process.env.NODE_ENV + '.js') || {})
