const mongoose = require('mongoose');

const professorSchema = mongoose.Schema();

const Professor = mongoose.model('professors', professorSchema);

module.exports = {
  Professor,
};
