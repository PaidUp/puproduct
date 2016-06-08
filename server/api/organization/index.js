'use strict'

const express = require('express')
const authService = require('../auth/auth.service')
const controller = require('./organization.controller')

const router = express.Router()

router.post('/request', authService.isAuthenticated(), controller.organizationRequest)
router.get('/response/:id', authService.isAuthenticated(), controller.organizationResponse)
router.put('/response/:id/:paymentId', authService.isAuthenticated(), controller.organizationResponseUpdate)

router.get('/:organizationId', authService.isAuthenticated(), controller.getOrganization)

module.exports = router
