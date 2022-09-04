const { Router } = require('express');
const router = Router();
const { userController } = require('../controllers/users.controller');

router.get('/user', userController.getUser);
router.post('/user', userController.addUser);
router.post('/login', userController.login);
router.patch('/basket/:id', userController.deleteBasket)

module.exports = router;