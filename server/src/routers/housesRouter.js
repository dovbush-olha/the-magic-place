const express = require('express');
const {
  getHouses,
  getHouse,
  editHouse,
  createHouse,
  deleteHouse,
} = require('../services/housesService');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('', authMiddleware, getHouses);
router.get('/:id', authMiddleware, getHouse);
router.put('/edit/:id', authMiddleware, editHouse);
router.post('/create', authMiddleware, createHouse);
router.delete('/delete/:id', authMiddleware, deleteHouse);

module.exports = {
  housesRouter: router,
};
