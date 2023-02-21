import express from 'express'

import productController from '../controllers/ProductController'

const router = express.Router()
router.get('/search',productController.search)
router.get('/get-type',productController.getType)
router.get('/get-price',productController.getPrice)
router.get('/get-size',productController.getSize)
router.get('/',productController.index)

export default router
