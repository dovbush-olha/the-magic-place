const express = require('express');
// const { authMiddleware } = require('../middleware/authMiddleware');
const {
  getAllSpells,
  getSpellById,
  // addSpellToDb,
  addManySpellsToDB,
} = require('../services/spellsService');
const transformSpellData = require('../helpers/transformSpellData');

const router = express.Router();

router.get(
  '',
  async (req, res) => {
    try {
      const spellsFromDB = await getAllSpells();
      const spells = spellsFromDB.map(transformSpellData);

      res.json(spells);
    } catch (e) {
      res.status(404).json({ message: e.message });
    }
  },
);

router.get(
  '/:id',
  async (req, res) => {
    try {
      const spellId = req.params.id;

      if (!spellId) throw new Error('Please, provide spell id');

      const spell = await getSpellById(spellId);

      res.json(transformSpellData(spell));
    } catch (e) {
      res.status(404).json({ message: e.message });
    }
  },
);

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

router.post(
  '/createMany',
  // authMiddleware,
  async (req, res) => {
    try {
      const SPELLS_EN = req.body.en;
      const SPELLS_UKR = req.body.ukr;
      const spellsForCreate = SPELLS_EN.map((spell, index) => ({
        EN: {
          ...spell,
        },
        UK: {
          ...SPELLS_UKR[index],
        },
      }));

      const result = await addManySpellsToDB(spellsForCreate);
      res.json({ result });
    } catch (e) {
      res.status(404).json({ message: e.message });
    }
  },
);

module.exports = {
  spellsRouter: router,
};
