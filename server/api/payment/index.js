import express from 'express'
import { isAuthenticated } from '@/util'
import { PaymentController } from '@/controllers'

const router = express.Router()

router.post('/', isAuthenticated, PaymentController.save)
router.get('/:paymentId', isAuthenticated, PaymentController.getById)
router.put('/:paymentId', isAuthenticated, PaymentController.updateById)

export default router
