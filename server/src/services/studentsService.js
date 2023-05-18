const Student = require("../models/Student");

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
  addStudentToDb,
  addManyStudentsToDB,
}