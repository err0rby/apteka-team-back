const { Router } = require('express')
const { basketController } = require('../controllers/basket.controller')
const router = Router()

router.get('/basket', basketController.getBaskets)

module.exports = router