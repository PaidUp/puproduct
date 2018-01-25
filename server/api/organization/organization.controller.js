import OrganizationService from '@/services/organization.service'
import HandlerResponse from '@/util/handlerResponse'

export default class OrganizationCotroller {
  static organizationRequest (req, res) {
    let hr = new HandlerResponse(res)
    OrganizationService.organizationRequest(req.body.userId, req.body.organizationInfo)
      .then(organization => {
        return hr.send({organizationId: organization._id})
      }).catch(reason => {
        return hr.error(reason)
      })
  }

  static organizationResponse (req, res) {
    let hr = new HandlerResponse(res)
    OrganizationService.organizationResponse(req.params.id).then(organization => {
      if (!organization) {
        return hr.error({name: 'ValidationError', message: 'organization does not exists', errors: 'organization does not exists or was processed'}, 400)
      }
      return hr.send(organization)
    }).catch(reason => {
      return hr.error(reason)
    })
  }

  static organizationResponseUpdate (req, res) {
    let hr = new HandlerResponse(res)
    OrganizationService.organizationResponseUpdate(req.params.id, req.params.paymentId).then(organization => {
      if (!organization) {
        return hr.error({name: 'ValidationError', message: 'organization was processed', errors: 'organization does not exists or was processed'}, 400)
      }
      return hr.send(organization)
    }).catch(reason => {
      return hr.error(reason)
    })
  }

  static getOrganization (req, res) {
    let hr = new HandlerResponse(res)
    OrganizationService.getOrganization(req.params.organizationId).then(organization => {
      return hr.send(organization)
    }).catch(reason => {
      return hr.error(reason)
    })
  }
}
