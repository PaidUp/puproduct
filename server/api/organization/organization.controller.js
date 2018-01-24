import organizationService from './organization.service'
// import logger from '@/config/logger'

const organizationController = {}

organizationController.organizationRequest = function (req, res) {
  organizationService.organizationRequest(req.body.userId, req.body.organizationInfo)
    .then(organization => {
      return res.status(200).json({organizationId: organization._id})
    }).catch(reason => {
      return handleError(res, reason)
    })
}

organizationController.organizationResponse = function (req, res) {
  organizationService.organizationResponse(req.params.id).then(organization => {
    if (!organization) {
      return handleError(res, {name: 'ValidationError', message: 'organization does not exists', errors: 'organization does not exists or was processed'})
    }
    return res.status(200).json(organization)
  }).catch(reason => {
    return handleError(res, reason)
  })
}

organizationController.organizationResponseUpdate = function organizationResponseUpdate (req, res) {
  organizationService.organizationResponseUpdate(req.params.id, req.params.paymentId).then(organization => {
    if (!organization) {
      return handleError(res, {name: 'ValidationError', message: 'organization was processed', errors: 'organization does not exists or was processed'})
    }
    return res.status(200).json(organization)
  }).catch(reason => {
    return handleError(res, reason)
  })
}

organizationController.getOrganization = function (req, res) {
  organizationService.getOrganization(req.params.organizationId).then(organization => {
    return res.status(200).json(organization)
  }).catch(reason => {
    return handleError(res, reason)
  })
}

function handleError (res, err) {
  let httpErrorCode = 500
  if (err.name === 'ValidationError') {
    httpErrorCode = 400
  }
  // TODO:  logger.log('error', err)
  return res.status(httpErrorCode).json({code: err.name, message: err.message, errors: err.errors})
}

export default organizationController
