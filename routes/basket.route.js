const { Router } = require('express')
const { basketController } = require('../controllers/basket.controller')
const authMiddleware = require('../middleware/auth.middleware')
const router = Router()

router.post('/basket', basketController.getBasket)
router.patch('/basket', basketController.pathBasket)
router.patch('/basket/delete/:userId', basketController.deletBasket)



module.exports = router