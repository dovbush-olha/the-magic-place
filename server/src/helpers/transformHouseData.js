const transformHouseData = (houseFromResponce) => ({
  id: houseFromResponce._id,
  name: houseFromResponce.name,
  image: houseFromResponce.image,
});

module.exports = transformHouseData;