const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware');
const {
  addHouseToDb,
  addHouseTitlesToDb,
} = require('../services/housesService');

const router = express.Router();

router.get(
  '',
  async (req, res) => {
    res.json('get houses');
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

router.post(
  '/createHouse',
  // authMiddleware,
  async (req, res) => {
    const houseName = req.body.houseName;
    const houseImage = req.body.houseImage;

    const result = await addHouseToDb({
      name: houseName,
      image: houseImage,
    });

    res.json(result);
  }
);

router.post(
  '/createHouseTitles',
  // authMiddleware,
  async (req, res) => {
    const {houseId, en: houseTitlesEn, uk: houseTitlesUk } = req.body;

    const titlesForDB = houseTitlesEn.map((title, index) => ({
      en: title,
      uk: houseTitlesUk[index],
    }));

    const result = await addHouseTitlesToDb(houseId, titlesForDB);

    res.json(result);
  }
);

module.exports = {
  housesRouter: router,
};
