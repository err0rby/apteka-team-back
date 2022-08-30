const { Router } = require('express')
const router = Router()
const { categoryController } = require('../controllers/category.controller')

router.post('/category', categoryController.postCategory)
router.get('/category', categoryController.getCategory)

module.exports = router;