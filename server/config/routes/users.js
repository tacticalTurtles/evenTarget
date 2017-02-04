var express = require('express');
var validator = require('validator');
var isEmpty = require('lodash/isEmpty');
var router = express.Router();
var helper = require('../../utils/helpers.js');

function validateInput(data) {
  let errors = {};

  if (validator.isEmpty(data.username)) {
    errors.username = 'Username is required';
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'password is required';
  }
  if (validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'password confirmation is required';
  }
  if (!validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }

}


router.post('/', (req, res) => {
  console.log('signup data ===', req.body);
  const { errors, isValid } = validateInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }

  var user = {
    username: req.body.username,
    password: req.body.password
  };

  helper.insertIntoUsers(user, (insertedUser) => {
    console.log(insertedUser + ' successfully added to users table');
    // res.send something to the homepage for redirect
  });
});

router.get('/', (req, res) => {
  helper.getUser(req.query, (foundUserID) => {
    console.log('user ID ===', foundUserID);
    // res.send(foundUserID);
  });
});

module.exports = router;
