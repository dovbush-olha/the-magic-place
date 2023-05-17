const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware');
const {
  getHouseData,
  getHouseTitles,
  addHouseToDb,
  addHouseTitlesToDb,
} = require('../services/housesService');

const HOUSE_NAMES = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

const router = express.Router();

router.get(
  '/:name',
  async (req, res) => {
    try {
      const houseName = req.params.name;

      if (HOUSE_NAMES.indexOf(houseName) === -1) throw new Error('Please provide correct house name');

      const houseData = await getHouseData(houseName);

      res.json(houseData);
    } catch (e) {
      res.status(404).json({ message: e.message });
    }
  },
);

router.get(
  '/titles/:id',
  async (req, res) => {
    try {
      const houseId = req.params.id;

      if (!houseId) throw new Error('Please add house id');

      const houseTitles = await getHouseTitles(houseId);

      res.json(houseTitles);
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
  '/createHouse',
  // authMiddleware,
  async (req, res) => {
    try {
      const houseName = req.body.houseName;
      const houseImage = req.body.houseImage;
      if (!houseName) throw new Error('Please provide data for House creation');

      const result = await addHouseToDb({
        name: houseName,
        image: houseImage,
      });

      res.json(result);
    } catch (e) {
      res.status(404).json({ message: e.message });
    }
  }
);

router.post(
  '/createHouseTitles',
  // authMiddleware,
  async (req, res) => {
    try {
      const {houseId, en: houseTitlesEn, uk: houseTitlesUk } = req.body;

      if (!houseId) throw new Error('Please add house id');

      const titlesForDB = houseTitlesEn.map((title, index) => ({
        en: title,
        uk: houseTitlesUk[index],
      }));

      const result = await addHouseTitlesToDb(houseId, titlesForDB);

      res.json(result);
    } catch (e) {
      res.status(404).json({ message: e.message });
    }
  }
);

module.exports = {
  housesRouter: router,
};
