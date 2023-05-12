const mongoose = require('mongoose');

const professorSchema = mongoose.Schema({
  EN: {
    name: {
      type: String,
      required: true,
    },
    portrait: {
      type: String,
      // required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    workPeriod: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    interestingFact: {
      type: String,
      required: true,
    },
  },
  UK: {
    name: {
      type: String,
      required: true,
    },
    portrait: {
      type: String,
      // required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    workPeriod: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    interestingFact: {
      type: String,
      required: true,
    },
  },
}, {
  timestamps: true,
});

const Professor = mongoose.model('professors', professorSchema);

module.exports = Professor;
