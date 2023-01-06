import express from 'express'

import productController from '../controllers/ProductController'

const router = express.Router()
router.get('/search',productController.search)
router.get('/',productController.index)

export default router
