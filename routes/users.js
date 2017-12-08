const express = require('express');
const router  = express.Router();



const UsersController = require('../controllers/users_controller');

// User

router.get('/', UsersController.index)
router.get('/:id', UsersController.show)

router.put('/:id', UsersController.update)
router.delete('/:id', UsersController.delete)
module.exports = router;
