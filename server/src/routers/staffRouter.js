const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware');
const {
  getAllProfessors,
  getProfessorById,
  addManyProfessorsToDB,
} = require('../services/staffService');
const transformProfessorData = require('../helpers/transformProfessorsData');

const router = express.Router();

router.get(
  '',
  async (req, res) => {
    try {
      const professorsFromDB = await getAllProfessors();
      const professors = professorsFromDB.map(transformProfessorData);

      res.json(professors);
    } catch (e) {
      res.status(404).json({ message: e.message });
    }
  },
);

router.get(
  '/:id',
  async (req, res) => {
    try {
      const professorId = req.params.id;

      if (!professorId) throw new Error('Please, provide professor id');

      const professor = await getProfessorById(professorId);

      res.json(transformProfessorData(professor));
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
      const PROFESSORS_EN = req.body.en;
      const PROFESSORS_UKR = req.body.ukr;

      const professorsForCreate = PROFESSORS_EN.map((professor, index) => ({
        EN: {
          ...professor,
        },
        UK: {
          ...PROFESSORS_UKR[index],
        },
      }));

      const result = await addManyProfessorsToDB(professorsForCreate);
      res.json({ result });
    } catch (e) {
      res.status(404).json({ message: e.message });
    }
  },
);

module.exports = {
  staffRouter: router,
};
