'use strict'

const mongoose = require('mongoose')
const organization = require('./organization.model.js')
const Blind = require('blind')
const config = require('../../config/environment/index')

function save (organization, cb) {
  // console.log('organization service',organization)
  organization.save(function (err, data) {
    if (err) {
      return cb(err)
    }
    return cb(null, data)
  })
}

function create (organization, cb) {
  organization.create(organization, function (err, data) {
    if (err) {
      return cb(err)
    }
    return cb(null, data)
  }
  )
}

function findOne (filter, fields, cb) {
  organization.findOne(filter, fields, function (err, data) {
    if (err) {
      return cb(err)
    }
    return cb(null, data)
  }
  )
}

function findById (id, cb) {
  organization.findById(id, function (err, organization) {
    if (err) {
      return cb(err)
    }
    return cb(null, organization)
  }
  )
}

function find (filter, fields, cb) {
  organization.find(filter, fields, function (err, data) {
    if (err) {
      return cb(err)
    }
    return cb(null, data)
  }
  )
}

function update (filter, value, cb) {
  organization.update(filter, value, function (err, data) {
    if (err) {
      return cb(err)
    }
    return cb(null, data)
  })
}

var encryptKey = config.encryptKey
function encryptField (value) {
  var encrypted = new Blind({ encryptKey: encryptKey }).encrypt(value)
  return encrypted
}

function decryptField (encryptedValue) {
  var decrypted = new Blind({ encryptKey: encryptKey }).decrypt(encryptedValue)
  return decrypted
}

/*function verifySSN(ssn) {
  return isValidSSN(ssn)
}*/

function getlast4Field (encryptedValue) {
  let last4Field = decryptField(encryptedValue)
  return last4Field.substring(last4Field.length - 4, last4Field.length)
}

function organizationRequest (userId, dataOrganization, cb) {
  dataOrganization.ownerId = userId
  dataOrganization.aba = encryptField(dataOrganization.aba)
  dataOrganization.dda = encryptField(dataOrganization.dda)
  dataOrganization.ownerSSN = encryptField(dataOrganization.ownerSSN)
  var Organization = new organization(dataOrganization)
  save(Organization, function (err, data) {
    if (err) return cb(err)
    return cb(null, data)
  })
}

function organizationResponse (organizationId, cb) {
  findOne({verify: 'pending', _id: organizationId}, '', function (err, organization) {
    if (err) return cb(err)
    if (!organization) return cb(null)
    organization.aba = decryptField(organization.aba)
    organization.dda = decryptField(organization.dda)
    organization.ownerSSN = decryptField(organization.ownerSSN)
    return cb(null, organization)
  })
}

function organizationResponseUpdate (organizationId, cb) {
  update({_id: organizationId}, {verify: 'done', aba: '', dda: '', ownerSSN: ''}, function (err, organization) {
    if (err) return cb(err)
    return cb(null, organization)
  })
}

exports.save = save
exports.create = create
exports.findOne = findOne
exports.findById = findById
exports.find = find
exports.update = update
exports.encryptField = encryptField
exports.decryptField = decryptField
// exports.verifySSN = verifySSN
exports.getlast4Field = getlast4Field
exports.organizationRequest = organizationRequest
exports.organizationResponse = organizationResponse
exports.organizationResponseUpdate = organizationResponseUpdate
