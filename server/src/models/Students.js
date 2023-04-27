const mongoose = require('mongoose');

const studentSchema = mongoose.Schema();

const Student = mongoose.model('students', studentSchema);

module.exports = {
  Student,
};
