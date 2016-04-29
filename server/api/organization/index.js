'use strict'

const express = require('express')
const authService = require('../auth/auth.service')
const controller = require('./organization.controller')

const router = express.Router()

router.post('/request', authService.isAuthenticated(), controller.organizationRequest)
router.get('/response/:id', authService.isAuthenticated(), controller.organizationResponse)

module.exports = router
