const { Router } = require('express')
const { basketController } = require('../controllers/basket.controller')
const authMiddleware = require('../middleware/auth.middleware')
const router = Router()

router.get('/basket', basketController.getBaskets)
router.post('/basket/id', basketController.getBasketById)
router.patch('/basket', basketController.patchBasket)


module.exports = router