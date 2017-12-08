const db = require('../models');

class UsersController {

  // GET /users
  index(req, res) {

      db.user.findAll().then(users=>{

          res.status(200).json({ users });


      });
  }

  // POST /users/:id
  show(req, res) {

      db.user.findOne({ where: { id : req.params.id }}).then(user => {

          res.status(200).json({ user });

    })
  }

  // PUT /users/:id
  update(req, res) {
      db.user.update(req.body ,  { where: { id: req.params.id} } ).then(user => {
          res.status(200).json({ 'message' : `${req.body.username} was update from bdd`});

  })




  }

  // DELETE /users/:id
  delete(req, res) {
      db.user.destroy({ where: { id : req.params.id }}).then(user => {

          res.status(200).json({ 'message' : 'user was remove from bdd'});

    })
  }
}

module.exports = new UsersController();
