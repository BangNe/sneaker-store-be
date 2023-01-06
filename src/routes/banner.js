import express from 'express'

import bannerContoller from '../controllers/BannerController'

const router = express.Router()
router.get('/',bannerContoller.index)

export default router
