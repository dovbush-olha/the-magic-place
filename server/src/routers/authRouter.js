const express = require('express');
const {
  login,
  signIn,
} = require('../services/authService');

const router = express.Router();

router.post('/login', login);
router.post('/signin', signIn);

module.exports = {
  authRouter: router,
};
