const express = require('express');
const router  = express.Router();

const ScreencapController = require('../controllers/screencap_controller');



router.get('/caps', ScreencapController.index);
router.get('/caps-random', ScreencapController.random);



module.exports = router;
