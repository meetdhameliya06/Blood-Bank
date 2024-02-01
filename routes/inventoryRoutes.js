const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

//router
//ADD inventory || POST
router.post('/create-inventory',authMiddleware,)


module.exports= router