const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get(
  '',
  async (req, res) => {
    res.json('get spells');
  },
);

// router.get(
//   '/:id',
//   authMiddleware,
//   async (req, res) => {},
// );

// router.put(
//   '/edit/:id',
//   authMiddleware,
//   async (req, res) => {},
// );

// router.post(
//   '/create',
//   authMiddleware,
//   async (req, res) => {},
// );

// router.delete(
//   '/delete/:id',
//   authMiddleware,
//   async (req, res) => {},
// );

module.exports = {
  spellsRouter: router,
};
