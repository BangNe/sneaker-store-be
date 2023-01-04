import express from 'express'

import productController from '../controllers/productsController'

const router = express.Router()

router.get('/',productController.index)
router.get('/test',productController.test)

export default router
