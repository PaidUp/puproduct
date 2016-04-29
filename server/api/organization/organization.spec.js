'use strict'

const app = require('../../../app')
const request = require('supertest')
const assert = require('chai').assert
const organization = require('./organization.model')
const organizationService = require('./organization.service')
const organizationSpecModel = require('./organization.model.spec')
const faker = require('faker')

let organizationId, userId, token

describe('User', function () {
  describe('organization.service', function () {
    it('save', function (done) {
      let organization = new organization(organizationSpecModel.organization)
      organizationService.save(organization, function (err, data) {
        if (err) return done(err)
        assert.equal(err, null)
        assert(data._id)
        assert.equal(data.teamName, organization.teamName)
        assert.equal(data.teamSport, organization.teamSport)
        assert.equal(data.ownerId, organization.ownerId)
        assert.equal(data.ownerFirstName, organization.ownerFirstName)
        assert.equal(data.ownerLastName, organization.ownerLastName)
        assert.equal(data.ownerEmail, organization.ownerEmail)
        assert.equal(data.ownerPhone, organization.ownerPhone)
        assert.equal(data.state, organization.state)
        assert.equal(data.city, organization.city)
        assert.equal(data.zipCode, organization.zipCode)
        assert.equal(data.Address, organization.Address)
        assert.equal(data.businessName, organization.businessName)
        assert.equal(data.businessType, organization.businessType)
        assert.equal(data.aba, organization.aba)
        assert.equal(data.dda, organization.dda)
        assert.equal(data.verify, organization.verify)
        assert.equal(data.phoneNumber, organization.phoneNumber)
        assert.equal(data.website, organization.website)
        assert.equal(data.averagePayment, organization.averagePayment)
        assert.equal(data.country, organization.country)
        assert.equal(data.teamAverageSize, organization.teamAverageSize)
        assert.equal(data.teamNumber, organization.teamNumber)
        done()
      })
    })
  })

  describe('organization.controller', function () {
    it('/user/create', function (done) {
      request(app)
        .post('/api/v1/user/create')
        .send({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
        })
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end(function (err, res) {
          if (err) return done(err)
          userId = res.body.userId
          assert(res.body.userId)
          done()
        })
    })

    it('/auth/local/signup', function (done) {
      let credentialFake = {
        userId: userId,
        email: faker.internet.email(),
        password: '123456',
        rememberMe: true
      }
      request(app)
        .post('/api/v1/auth/local/signup')
        .send(credentialFake)
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end(function (err, res) {
          if (err) return done(err)
          assert(res.body.token)
          token = res.body.token
          done()
        })
    })

    it('/commerce/organization/request', function (done) {
      this.timeout(10000)
      request(app)
        .post('/api/v1/commerce/organization/request')
        .send({token: token, organizationInfo: organizationSpecModel.organization})
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end(function (err, res) {
          if (err) return done(err)
          assert(res.body.organizationId)
          organizationId = res.body.organizationId
          done()
        })
    })

    it('/commerce/organization/response', function (done) {
      this.timeout(10000)
      request(app)
        .get('/api/v1/commerce/organization/response/' + organizationId)
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end(function (err, res) {
          if (err) return done(err)
          done()
        })
    })
  })
})
