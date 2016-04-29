/**
 * Express configuration
 */

'use strict'
const compression = require('compression')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')

module.exports = function (app) {
  app.use(compression())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(methodOverride())
  app.use(cookieParser())
}
