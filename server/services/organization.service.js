import { OrganizationModel } from '@/models'
import { Ncryp } from '@/util'

export default class OrganizationService {
  static save (userId, dataOrganization) {
    dataOrganization.ownerId = userId
    dataOrganization.aba = Ncryp.encryptField(dataOrganization.aba)
    dataOrganization.dda = Ncryp.encryptField(dataOrganization.dda)
    dataOrganization.ownerSSN = Ncryp.encryptField(dataOrganization.ownerSSN)
    return OrganizationModel.save(dataOrganization).then(data => data)
  }

  static updateById (organizationId, values, cb) {
    return OrganizationModel.updateById(organizationId, values).then(data => data)
  }

  static getOrganization (_id) {
    return OrganizationModel.findById(_id).then(organization => organization)
  }
}
