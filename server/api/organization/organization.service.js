'use strict'

import Organization from './organization.model.js'
import Blind from 'blind'
import config from '../../config/environment/index'

const organizationService = {}

organizationService.save = function (organization, cb) {
  // console.log('organization service',organization)
  organization.save(function (err, data) {
    if (err) {
      return cb(err)
    }
    return cb(null, data)
  })
}

organizationService.create = function (organization, cb) {
  organization.create(organization, function (err, data) {
    if (err) {
      return cb(err)
    }
    return cb(null, data)
  }
  )
}

organizationService.findOne = function (filter, fields, cb) {
  Organization.findOne(filter, fields, function (err, data) {
    if (err) {
      return cb(err)
    }
    return cb(null, data)
  }
  )
}

organizationService.findById = function (id, cb) {
  Organization.findById(id, function (err, organization) {
    if (err) {
      return cb(err)
    }
    return cb(null, organization)
  }
  )
}

organizationService.find = function (filter, fields, cb) {
  Organization.find(filter, fields, function (err, data) {
    if (err) {
      return cb(err)
    }
    return cb(null, data)
  }
  )
}

organizationService.update = function (filter, value, cb) {
  Organization.update(filter, value, function (err, data) {
    if (err) {
      return cb(err)
    }
    return cb(null, data)
  })
}

organizationService.encryptField = function (value) {
  var encrypted = new Blind({ encryptKey: config.encryptKey }).encrypt(value)
  return encrypted
}

organizationService.decryptField = function (encryptedValue) {
  var decrypted = new Blind({ encryptKey: config.encryptKey }).decrypt(encryptedValue)
  return decrypted
}

organizationService.getlast4Field = function (encryptedValue) {
  let last4Field = organizationService.decryptField(encryptedValue)
  return last4Field.substring(last4Field.length - 4, last4Field.length)
}

organizationService.organizationRequest = function (userId, dataOrganization, cb) {
  dataOrganization.ownerId = userId
  dataOrganization.aba = organizationService.encryptField(dataOrganization.aba)
  dataOrganization.dda = organizationService.encryptField(dataOrganization.dda)
  dataOrganization.ownerSSN = organizationService.encryptField(dataOrganization.ownerSSN)
  let newOrganization = new Organization(dataOrganization)
  organizationService.save(newOrganization, function (err, data) {
    if (err) return cb(err)
    return cb(null, data)
  })
}

organizationService.organizationResponse = function (organizationId, cb) {
  organizationService.findOne({verify: 'pending', _id: organizationId}, '', function (err, organization) {
    if (err) return cb(err)
    if (!organization) return cb(null)
    organization.aba = organizationService.decryptField(organization.aba)
    organization.dda = organizationService.decryptField(organization.dda)
    organization.ownerSSN = organizationService.decryptField(organization.ownerSSN)
    return cb(null, organization)
  })
}

organizationService.organizationResponseUpdate = function (organizationId, paymentId, cb) {
  organizationService.update({_id: organizationId}, {verify: 'done', aba: '', dda: '', ownerSSN: '', paymentId: paymentId}, function (err, organization) {
    if (err) return cb(err)
    return cb(null, organization)
  })
}

export default organizationService
