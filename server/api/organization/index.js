import express from 'express'
import authService from '@/api/auth/auth.service'
// import controllers from '@/controllers'
import {OrganizationController, ProductController} from '@/controllers'

const router = express.Router()
router.post('/', authService.isAuthenticated(), OrganizationController.save)
router.put('/:organizationId/payment/:paymentId', authService.isAuthenticated(), OrganizationController.updatePaymentId)
router.get('/:organizationId', authService.isAuthenticated(), OrganizationController.getOrganization)

router.get('/:organizationId/products', authService.isAuthenticated(), ProductController.getListByOrganizationId)
router.get('/:organizationId/product/:productId', authService.isAuthenticated(), ProductController.getByOrganizationId)

export default router
