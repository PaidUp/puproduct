import express from 'express'
import authService from '@/api/auth/auth.service'
import ProductController from './product.controller'

const router = express.Router()

router.post('/', authService.isAuthenticated(), ProductController.save)
router.get('/:productId', authService.isAuthenticated(), ProductController.getProductById)

export default router
