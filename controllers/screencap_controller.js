const db = require('../models');
const _ = require('lodash')

class ScreencapController {

    // GET /users
    index(req, res) {

        let options = {
            include:[
                {
                    model: db.movie,
                    attributes: ['title']
                }
            ]
        }

        db.screencap.findAll(options).then(screencap => {

            res.status(200).json({ "caps":screencap});


        });
    }
    random(req,res){
        let options = {
            include:[
                {
                    model: db.movie,
                    attributes: ['title']
                }
            ]
        }
        //let caps= _.sample(capsJson);
        db.screencap.findAll(options).then(screencap => {
            let caps= _.sample(screencap);
            console.log(caps)
            res.status(200).json({ "caps":caps});


        });
    }


}

module.exports = new ScreencapController();
