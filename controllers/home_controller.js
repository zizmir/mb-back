const db = require('../models');

class HomeController {

    // GET /
    index(req, res) {

        res.status(200).json({hi: "mCaps Rocks!"});
    }

}

module.exports = new HomeController();
