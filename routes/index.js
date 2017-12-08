const express = require('express');
const router  = express.Router();

const AuthController = require('../controllers/auth_controller');
const HomeController = require('../controllers/home_controller');

// authentification

router.post('/sign-in', AuthController.signIn);
router.post('/sign-up', AuthController.signUp);


// Home
router.get('/', HomeController.index);



module.exports = router;
