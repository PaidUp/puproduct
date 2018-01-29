import express from 'express'
import { isAuthenticated } from '@/util'
import { ProductController, PaymentController } from '@/controllers'

const router = express.Router()

router.post('/', isAuthenticated, ProductController.save)
router.get('/:productId', isAuthenticated, ProductController.getById)
router.put('/:productId', isAuthenticated, ProductController.updateById)

router.get('/:productId/payments', isAuthenticated, PaymentController.getListByProductId)
router.get('/:productId/payment/:paymentId', isAuthenticated, PaymentController.getByProductId)

export default router
