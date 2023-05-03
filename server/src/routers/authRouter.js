const express = require('express');

const router = express.Router();

const {
  createUser,
} = require('../services/authService');

router.post(
  '/login',
  createUser,
  // async (req, res) => {
  //   res.json('auth login');
  // },
);

router.post(
  '/signin',
  async (req, res) => {
    res.json('auth sign in');
  },
);

module.exports = {
  authRouter: router,
};
