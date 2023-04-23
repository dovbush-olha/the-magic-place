const express = require('express');
//const { authMiddleware } = require('../middleware/authMiddleware');
const { findAllSpells, findSpell, editSpell, createSpell, deleteSpell } = require('../services/spellsService');

const router = express.Router();

router.get(
  '',
  //authMiddleware,
  async (req, res) => {
    try {
      const spells = await findAllSpells();
      return res.status(201).send(spells);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
);

router.get(
  '/:id',
  //authMiddleware,
  async (req, res) => {
    try {
      const id = req.params.id;
      const spell = await findSpell(id);
      return res.status(201).send(spell);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
);

router.put(
  '/edit/:id',
  //authMiddleware,
  async (req, res) => {
    try {
      const id = req.params.id;
      const { language, data } = req.body;

      const spell = await editSpell(id, language, data);
      return res.status(201).send(spell);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
);

router.post(
  '/create',
  //authMiddleware,
  async (req, res) => {
    try {
      const { language, data } = req.body;

      const spell = await createSpell(language, data);
      return res.status(201).send(spell);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
);

router.delete(
  '/delete/:id',
  //authMiddleware,
  async (req, res) => {
    try {
      const id = req.params.id;

      await deleteSpell(id);
      return res.status(201).send('Spell removed successfully');
    } catch (err) {
      return res.status(500).send(err);
    }
  },
);

//TODO do we need this endpoint with different languages?
router.get(
  '/language',
  //authMiddleware,
  async (req, res) => {
    try {
      const language = req.body.language;
      const spells = await findAllSpells(language);
      return res.status(201).send(spells);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
);


module.exports = {
  spellsRouter: router,
};
