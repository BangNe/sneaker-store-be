import express from 'express'

import brandController from '../controllers/brandController'

const router = express.Router()

router.get('/',brandController.index)

export default router
