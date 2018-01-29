import express from 'express'
import organization from './organization'
import product from './product'
import payment from './payment'
const router = express.Router()

router.use('/organization', organization)
router.use('/product', product)
router.use('/payment', payment)

export default router
