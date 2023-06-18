const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  UK: {
    name: {
      type: String,
      required: true,
    }  ,
    portrait: {
      type: String,
      // require: true,
    },
    house: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    interestingFacts: {
      type: [String],
      required: true,
    },
  },
  EN: {
    name: {
      type: String,
      required: true,
    },
    portrait: {
      type: String,
      // require: true,
    },
    house: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    interestingFacts: {
      type: [String],
      required: true,
    },
  }
}, {
  timestamps: true,
});

const Student = mongoose.model('students', studentSchema);

module.exports = Student;
