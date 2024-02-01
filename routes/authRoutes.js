const express = require('express')
const { registerController, loginController, currentUserController} = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')
// const { route } = require('./testRoutes')

const router = express.Router()

//router
//Register || post
router.post('/register',registerController)

//Login || get
router.get("/login",loginController)

// GET CURRENT USER || GET
router.get('/current-user', authMiddleware, currentUserController)

module.exports = router;