import express from 'express'
import { isAuthenticated } from '@/util'
import { ProductController } from '@/controllers'

const router = express.Router()

router.post('/', isAuthenticated, ProductController.save)
router.get('/:productId', isAuthenticated, ProductController.getById)
router.put('/:productId', isAuthenticated, ProductController.updateById)

export default router
