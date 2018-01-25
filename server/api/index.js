import express from 'express'
import organization from './organization'
import product from './product'
const router = express.Router()

router.use('/organization', organization)
router.use('/product', product)

export default router
