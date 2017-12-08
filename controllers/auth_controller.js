const db = require('../models');

class AuthController {

  // POST /sign-up
  signUp(req, res) {

    let userForm = {
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      password_confirmation: req.body.password_confirmation,
    }

    console.log(userForm);

    db.user.create(userForm).then(usr => {
      res.status(201).json({ user: usr })
    }).catch(err => {
      res.status(400).json({ err: err.message })
    });

  }

  // POST /sign-in
  signIn(req, res) {

    let userForm = {
      username: req.body.username,
      password: req.body.password
    }

    db.user.findOne({ where: { username: userForm.username }}).then(usr => {
      if (!usr) {
        res.status(400).json({ err: "Please check the username"})
      } else if (u.checkPassword(userForm.password)) {
        res.status(200).json({ user: usr });
      } else {
        res.status(400).json({ err: "Please check your password"})
      }
    })

  }

}

module.exports = new AuthController();
