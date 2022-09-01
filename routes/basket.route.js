const { Router } = require('express')
const { basketController } = require('../controllers/basket.controller')
const authMiddleware = require('../middleware/auth.middleware')
const router = Router()

router.post('/basket', basketController.getBasket)


module.exports = router