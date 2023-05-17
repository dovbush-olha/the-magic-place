const transformHouseData = require('../helpers/transformHoseData');
const transformHouseTitleData = require('../helpers/transformHouseTitleData');
const {
  House,
  HouseTitle,
} = require('../models/House');

async function getHouseData(houseName) {
  const houseFromDB = await House.findOne({ name: houseName });
  
  return transformHouseData(houseFromDB);
}

async function getHouseTitles(houseId) {
  const houseTitlesFromDB = await HouseTitle.find({ houseId: houseId });

  return houseTitlesFromDB.map(transformHouseTitleData);
}

async function addHouseToDb(houseData) {
  const newHouse = new House(houseData);

  await newHouse.save();
  return newHouse;
}

async function addHouseTitleToDb(houseId, houseTitles) {
  const newHouseTitle = new HouseTitle({
    houseId,
    titleEn: houseTitles.en,
    titleUk: houseTitles.uk,
  });

  await newHouseTitle.save();
  return newHouseTitle;
}

async function addHouseTitlesToDb(houseId, houseTitles) {
  await houseTitles.map(title => addHouseTitleToDb(houseId, title));

  return houseTitles;
}

module.exports = {
  getHouseData,
  getHouseTitles,
  addHouseToDb,
  addHouseTitleToDb,
  addHouseTitlesToDb,
};
