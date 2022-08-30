const { Router } = require('express')
const { basketController } = require('../controllers/basket.controller')
const router = Router()

router.post('/basket', basketController.postBasket)
router.get('/basket', basketController.getBaskets)

module.exports = router