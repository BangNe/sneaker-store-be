import express from 'express'

import userController from '../controllers/UserController'

const router = express.Router()
router.post('/log-in',userController.logInUser)
router.post('/create',userController.createUser)
router.get('/',userController.index)

export default router
