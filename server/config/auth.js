var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('./config.js');

router.post('/', (req, res) => {
  const { identifier, password } = req.body;

  User.query({
    where: { username: identifier },
    orWhere: { email: identifier }
  }).fetch().then(user => {
    if (user) {
      if (bcrypt.compareSync(password, user.get('password_digest'))) {
        const token = jwt.sign({
          id: user.get('id'),
          username: user.get('username')
        }, config.jwtSecret);
        res.json({ token });
      } else {
        res.status(400).json({ errors: { form: 'Invalid Credentials' } })
      }
    } else {
      res.status(400).json({ errors: { form: 'Invalid Credentials' } })
    }
  })
})

module.exports = router;