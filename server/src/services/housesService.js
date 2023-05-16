const {
  House,
  HouseTitle,
} = require('../models/House');

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
  addHouseToDb,
  addHouseTitleToDb,
  addHouseTitlesToDb,
};
