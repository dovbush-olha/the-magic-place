const express = require('express');
const {
  getStudents,
  getStudent,
  editStudent,
  createStudent,
  deleteStudent,
} = require('../services/studentsService');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('', authMiddleware, getStudents);
router.get('/:id', authMiddleware, getStudent);
router.put('/edit/:id', authMiddleware, editStudent);
router.post('/create', authMiddleware, createStudent);
router.delete('/delete/:id', authMiddleware, deleteStudent);

module.exports = {
  studentsRouter: router,
};
