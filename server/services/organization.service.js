import OrganizationModel from '@/models/organization.model.js'
import Ncryp from '@/util/ncryp'

export default class OrganizationService {
  static organizationRequest (userId, dataOrganization) {
    dataOrganization.ownerId = userId
    dataOrganization.aba = Ncryp.encryptField(dataOrganization.aba)
    dataOrganization.dda = Ncryp.encryptField(dataOrganization.dda)
    dataOrganization.ownerSSN = Ncryp.encryptField(dataOrganization.ownerSSN)
    return OrganizationModel.save(dataOrganization).then(data => data)
  }

  static organizationResponse (organizationId) {
    return OrganizationModel.findOne({organizationId}).then(organization => organization)
  }

  static organizationResponseUpdate (organizationId, paymentId, cb) {
    let query = {_id: organizationId}
    let val = {verify: 'done', aba: '', dda: '', ownerSSN: '', paymentId: paymentId}
    return OrganizationModel.updateById(query, val).then(data => data)
  }

  static getOrganization (_id) {
    return OrganizationModel.findById(_id).then(organization => organization)
  }
}
