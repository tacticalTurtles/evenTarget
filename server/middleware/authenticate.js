var jwt = require('jsonwebtoken');
var config = require('../config/config.js');
var User = require('../models/user.js');

module.exports = (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];
  let token;

  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }

  if (token) {
    jwt.verify(token, config.jwt, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: 'Failed to authenticate' });
      } else {
        User.query({
          where: { id: decoded.id },
          select: ['email', 'id', 'uesrname']}).fetch().then(user => {
          if (!user) {
            res.status(404).json({ error: 'No such user' });
          }

          req.currentUser = user;
          next();
        });
      }
    });
  } else {
    res.status(403).json({
      error: 'No token provided'
    })
  }
}