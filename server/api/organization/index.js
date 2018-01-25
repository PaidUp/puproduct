import express from 'express'
import authService from '@/api/auth/auth.service'
import OrganizationController from './organization.controller'
import ProductController from '@/api/product/product.controller'

const router = express.Router()
router.post('/request', authService.isAuthenticated(), OrganizationController.organizationRequest)
router.get('/response/:id', authService.isAuthenticated(), OrganizationController.organizationResponse)
router.put('/response/:id/:paymentId', authService.isAuthenticated(), OrganizationController.organizationResponseUpdate)
router.get('/:organizationId', authService.isAuthenticated(), OrganizationController.getOrganization)

router.get('/:organizationId/products', authService.isAuthenticated(), ProductController.getProductsByOrganizationId)

export default router
