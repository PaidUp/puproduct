import express from 'express'
import organization from './organization'
const router = express.Router()

router.use('/organization', organization)

export default router
