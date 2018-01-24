import OrganizationModel from './organization.model.js'
import Blind from 'blind'
import config from '@/config/environment'

const organizationService = {}

function encryptField (value) {
  let encrypted = new Blind({ encryptKey: config.encryptKey }).encrypt(value)
  return encrypted
}

// function decryptField (encryptedValue) {
//   var decrypted = new Blind({ encryptKey: config.encryptKey }).decrypt(encryptedValue)
//   return decrypted
// }

// function getlast4Field (encryptedValue) {
//   let last4Field = organizationService.decryptField(encryptedValue)
//   return last4Field.substring(last4Field.length - 4, last4Field.length)
// }

organizationService.organizationRequest = function (userId, dataOrganization) {
  dataOrganization.ownerId = userId
  dataOrganization.aba = encryptField(dataOrganization.aba)
  dataOrganization.dda = encryptField(dataOrganization.dda)
  dataOrganization.ownerSSN = encryptField(dataOrganization.ownerSSN)
  return OrganizationModel.save(dataOrganization).then(data => data)
}

organizationService.organizationResponse = function (organizationId) {
  return OrganizationModel.findOne(organizationId).then(organization => organization)
}

organizationService.organizationResponseUpdate = function (organizationId, paymentId, cb) {
  let query = {_id: organizationId}
  let val = {verify: 'done', aba: '', dda: '', ownerSSN: '', paymentId: paymentId}
  return OrganizationModel.updateById(query, val).then(data => data)
}

organizationService.getOrganization = function (_id) {
  return OrganizationModel.findById(_id).then(organization => organization)
}

export default organizationService
