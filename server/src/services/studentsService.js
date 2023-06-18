const Student = require("../models/Student");
const transformStudentData = require('../helpers/transformStudentData');

async function getAllStudents() {
  const students = await Student.find();

  if (!students.length) throw new Error('No students in DB');

  return students.map(transformStudentData);
}

async function getStudentById(studentId) {
  const student = await Student.findOne({ _id: studentId });

  if (!student) throw new Error('No student with this id');

  return transformStudentData(student);
}

async function addStudentToDb(student) {
  const { UK, EN } = student;

  const newStudent = new Student({ UK, EN });

  await newStudent.save();
}

async function addManyStudentsToDB(students) {
  await students.forEach((student) => addStudentToDb(student));
  return 'success';
}

module.exports = {
  getAllStudents,
  getStudentById,
  addStudentToDb,
  addManyStudentsToDB,
}