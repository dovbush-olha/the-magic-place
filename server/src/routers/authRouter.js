const express = require('express');

const router = express.Router();

router.post(
  '/login',
  async (req, res) => {
    res.json('auth login');
  },
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
