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
  return res.status(200).json({organizationResponse: true})
/*let organizationId = req.params.id
commerceService.organizationResponse(organizationId, 'pending', function (err, organization) {
  if (err) {
    return handleError(res, err)
  }
  if (!organization) {
    return res.status(200).json({})
  }
  let stripeInfo = {
    email: organization.ownerEmail,
    country: organization.country
  }
  paymentService.createConnectAccount(stripeInfo, function (err, account) {
    if (err) {
      // return handleError(res, err)
      return res.status(200).json({})
    }
    paymentService.addBankConnectAccount({accountId: account.id,bankAccount: {country: organization.country,routingNumber: organization.aba,accountNumber: organization.dda}}, function (err, bank) {
      if (err) {
        // return handleError(res, err)
        return res.status(401).json({})
      }
      let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.client.remoteAddress
      let legalEntity = {
        accountId: account.id,
        firstName: organization.ownerFirstName,
        lastName: organization.ownerLastName,
        day: organization.ownerDOB.getDay() + 1,
        month: organization.ownerDOB.getMonth() + 1,
        year: organization.ownerDOB.getFullYear(),
        type: config.payment.legalEntity.type,
        businessName: organization.businessName,
        last4: organization.ownerSSN.slice(-4),
        EIN: organization.EIN,
        line1: organization.Address,
        line2: organization.AddressLineTwo,
        city: organization.city || 'Austin',
        state: organization.state || 'Tx',
        postalCode: organization.zipCode,
        country: organization.country || 'US',
        personalIdNumber: organization.ownerSSN
      }
      paymentService.addToSCustomer({accountId: account.id, ip: ip}, function (err, acceptedToS) {
        if (err) {
          // return handleError(res, err)
          return res.status(401).json({})
        }
        paymentService.addLegalCustomer(legalEntity, function (err, acceptedLegal) {
          let updateDrescriptor = {
            accountId: account.id,
            data: {
              statement_descriptor: organization.ownerFirstName + ' ' + organization.ownerLastName
            }
          }
          paymentService.updateAccount(updateDrescriptor, function (err, descriptor) {
            if (err) {
              // return handleError(res, err)
              return res.status(401).json({})
            }

            if (err) {
              // return handleError(res, err)
              return res.status(401).json({})
            }
            let productTeam = {
              type: config.commerce.products.defaultValue.type,
              set: config.commerce.products.defaultValue.set,
              sku: organization.ownerId,
              data: {
                name: organization.teamName,
                websites: [config.commerce.products.defaultValue.websites],
                shortDescription: organization.businessName,
                description: '',
                status: config.commerce.products.defaultValue.status,
                price: config.commerce.products.defaultValue.price,
                taxClassId: config.commerce.products.defaultValue.taxClassId,
                urlKey: config.commerce.products.defaultValue.urlKey,
                urlPath: config.commerce.products.defaultValue.urlPath,
                visibility: config.commerce.products.defaultValue.visibility,
                categories: [config.commerce.category.teams],
                categoryIds: [config.commerce.category.teams],
                balancedCustomerId: account.id,
                tdPaymentId: account.id
              }
            }
            catalogService.catalogCreate(productTeam, function (err, teamId) {
              if (err) {
                // return handleError(res, err)
                return res.status(402).json({})
              }
              commerceService.organizationResponseUpdate(organizationId, {verify: 'done', aba: '', dda: '', ownerSSN: ''}, function (err, organizationData) {
                if (err) {
                  // return handleError(res, err)
                  return res.status(403).json({})
                }
                userService.find({_id: organization.ownerId}, function (err , users) {
                  if (err) return handleError(res, err)
                  var user = users[0]
                  user.meta.organizationStatus = 'done'
                  user.meta.productRelated.push(teamId)
                  userService.save(user, function (err, data) {
                    if (err) {
                      return handleError(res, err)
                    }
                    return res.status(200).json({})
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})*/
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
