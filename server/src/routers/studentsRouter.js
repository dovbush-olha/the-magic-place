const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware');
const {
  addStudentToDb,
  addManyStudentsToDB,
} = require('../services/studentsService');

const router = express.Router();

router.get(
  '',
  async (req, res) => {
    res.json('get students');
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
  '/createMany',
  // authMiddleware,
  async (req, res) => {
    try {
      const STUDENTS_EN = req.body.en;
      const STUDENTS_UKR = req.body.ukr;
      const studentsForCreate = STUDENTS_EN.map((student, index) => ({
        EN: {
          ...student,
        },
        UK: {
          ...STUDENTS_UKR[index],
        },
      }));

      const result = await addManyStudentsToDB(studentsForCreate);
      res.json({ result });
    } catch (e) {
      res.status(404).json({ message: e.message });
    }
  },
);

module.exports = {
  studentsRouter: router,
};
