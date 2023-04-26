const express = require('express');

const router = express.Router();

router.post(
  '/login',
  async (req, res) => {},
);

router.post(
  '/signin',
  async (req, res) => {},
);

module.exports = {
  authRouter: router,
};
