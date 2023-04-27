const mongoose = require('mongoose');

const houseSchema = mongoose.Schema();

const House = mongoose.model('houses', houseSchema);

module.exports = {
  House,
};
