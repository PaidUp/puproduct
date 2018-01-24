import express from 'express'
import authService from '../auth/auth.service'
import controller from './organization.controller'

const router = express.Router()

router.post('/request', authService.isAuthenticated(), controller.organizationRequest)
router.get('/response/:id', authService.isAuthenticated(), controller.organizationResponse)
router.put('/response/:id/:paymentId', authService.isAuthenticated(), controller.organizationResponseUpdate)
router.get('/:organizationId', authService.isAuthenticated(), controller.getOrganization)

export default router
