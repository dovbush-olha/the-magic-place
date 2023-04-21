const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get(
  '',
  authMiddleware,
  async (req, res) => {},
);

router.get(
  '/:id',
  authMiddleware,
  async (req, res) => {},
);

router.put(
  '/edit/:id',
  authMiddleware,
  async (req, res) => {},
);

router.post(
  '/create',
  authMiddleware,
  async (req, res) => {},
);

router.delete(
  '/delete/:id',
  authMiddleware,
  async (req, res) => {},
);

module.exports = {
  housesRouter: router,
};
