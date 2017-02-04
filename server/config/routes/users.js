var express = require('express');
var validator = require('validator');
var isEmpty = require('lodash/isEmpty');
var router = express.Router();

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
  console.log(req.body);
  const { errors, isValid } = validateInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }

});


module.exports = router;
