const express = require('express');
const {
  getSpells,
  getSpell,
  editSpell,
  createSpell,
  deleteSpell,
} = require('../services/spellsService');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('', authMiddleware, getSpells);
router.get('/:id', authMiddleware, getSpell);
router.put('/edit/:id', authMiddleware, editSpell);
router.post('/create', authMiddleware, createSpell);
router.delete('/delete/:id', authMiddleware, deleteSpell);

module.exports = {
  spellsRouter: router,
};
