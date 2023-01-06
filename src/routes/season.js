import express from 'express'

import seasonController from '../controllers/SeasonController'

const router = express.Router()

router.get('/',seasonController.index)

export default router
