const express = require('express')
const { testController } = require('../controllers/testControllers')

//router object 
const router =express.Router()

//router
router.get('/',testController)

//export
module.exports = router;