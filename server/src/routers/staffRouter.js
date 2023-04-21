const express = require('express');
const {
  getStaff,
  getProfessor,
  editProfessor,
  createProfessor,
  deleteProfessor,
} = require('../services/staffService');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('', authMiddleware, getStaff);
router.get('/:id', authMiddleware, getProfessor);
router.put('/edit/:id', authMiddleware, editProfessor);
router.post('/create', authMiddleware, createProfessor);
router.delete('/delete/:id', authMiddleware, deleteProfessor);

module.exports = {
  staffRouter: router,
};
