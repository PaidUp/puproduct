'use strict'

const logger = require('../../config/logger')
const organizationService = require('./organization.service')
// const config = require('../../../config/environment')

exports.organizationRequest = function (req, res) {
  organizationService.organizationRequest(req.body.userId, req.body.organizationInfo, function (err, organization) {
    if (err) {
      return handleError(res, err)
    }
    return res.status(200).json({organizationId: organization._id})
  })
}

exports.organizationResponse = function (req, res) {
  organizationService.organizationResponse(req.params.id, function (err, organization) {
    if (err) {
      return handleError(res, err)
    }
    if (!organization) {
      return handleError(res, {name: 'ValidationError', message: 'organization does not exists', errors: 'organization does not exists or was processed'})
    }
    return res.status(200).json(organization)
  })
}

exports.organizationResponseUpdate = function organizationResponseUpdate (req, res) {
  organizationService.organizationResponseUpdate(req.params.id, req.params.paymentId, function (err, organization) {
    if (err) {
      return handleError(res, err)
    }
    if (!organization) {
      return handleError(res, {name: 'ValidationError', message: 'organization was processed', errors: 'organization does not exists or was processed'})
    }
    return res.status(200).json(organization)
  })
}

function handleError (res, err) {
  let httpErrorCode = 500
  let errors = []

  if (err.name === 'ValidationError') {
    httpErrorCode = 400
  }
  logger.log('error', err)

  return res.status(httpErrorCode).json({code: err.name, message: err.message, errors: err.errors})
}
