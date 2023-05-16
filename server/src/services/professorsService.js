const Professor = require('../models/Professor');

async function getAllProfessors() {
  const professors = await Professor.find();

  if (!professors.length) throw new Error('No professors in DB');

  return professors;
}

async function getProfessorById(professorId) {
  const professor = await Professor.findOne({ _id: professorId });

  if (!professor) throw new Error('No spell with this id');

  return professor;
}

async function addProfessorToDb(professor) {
  const { UK, EN } = professor;

  const newProfessor = new Professor({ UK, EN });

  await newProfessor.save();
}

async function addManyProfessorsToDB(professors) {
  await professors.forEach((professor) => addProfessorToDb(professor));
  console.log(professors.length);
  return 'success';
}

module.exports = {
  getAllProfessors,
  getProfessorById,
  addProfessorToDb,
  addManyProfessorsToDB,
};
