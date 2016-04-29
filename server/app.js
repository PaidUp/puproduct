/**
 * Main application file
 */

'use strict'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const pmx = require('pmx').init({
  http: true, // HTTP routes logging (default: true)
  ignore_routes: [/socket\.io/, /notFound/], // Ignore http routes with this pattern (Default: [])
  errors: true, // Exceptions loggin (default: true)
  custom_probes: true, // Auto expose JS Loop Latency and HTTP req/s as custom metrics
  network: true, // Network monitoring at the application level
  ports: true // Shows which ports your app is listening on (default: false)
})

const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/environment')

mongoose.connect(config.mongo.uri, config.mongo.options)

const app = express()
const server = require('http').createServer(app)
require('./config/express')(app)
require('./routes')(app)

// Start server
if (config.env != 'test') {
  try {
    server.listen(config.port, config.ip, function () {
      console.log('Express server listening on %d, in %s mode', config.port, app.get('env'))
    })
  } catch(err) {
    console.log('error:' , err)
  }
}

exports = module.exports = app
