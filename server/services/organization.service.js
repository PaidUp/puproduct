import { OrganizationModel } from '@/models'
import { Ncryp } from '@/util'
const organizationModel = new OrganizationModel()

export default class OrganizationService {
  static save (userId, dataOrganization) {
    dataOrganization.ownerId = userId
    dataOrganization.aba = Ncryp.encryptField(dataOrganization.aba)
    dataOrganization.dda = Ncryp.encryptField(dataOrganization.dda)
    dataOrganization.ownerSSN = Ncryp.encryptField(dataOrganization.ownerSSN)
    return organizationModel.save(dataOrganization).then(data => data)
  }

  static updateById (organizationId, values, cb) {
    return organizationModel.updateById(organizationId, values).then(data => data)
  }

  static getOrganization (_id) {
    return organizationModel.findById(_id).then(organization => organization)
  }
}
