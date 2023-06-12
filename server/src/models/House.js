const mongoose = require('mongoose');

const houseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // required: true,
  },
}, {
  timestamps: true,
});

const houseTitleSchema = mongoose.Schema({
  houseId: {
    type: mongoose.Types.ObjectId,
    ref: 'houses',
  },
  titleEn: {
    type: String,
    required: true,
  },
  titleUk: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
})

const House = mongoose.model('houses', houseSchema);
const HouseTitle = mongoose.model('house_titles', houseTitleSchema);

module.exports = {
  House,
  HouseTitle,
};
