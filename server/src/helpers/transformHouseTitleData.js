const transformHouseTitleData = (houseTitleFromResponce) => ({
  id: houseTitleFromResponce._id,
  houseId: houseTitleFromResponce.houseId,
  titleEn: houseTitleFromResponce.titleEn,
  titleUk: houseTitleFromResponce.titleUk,
  createdAt: houseTitleFromResponce.createdAt,
  updatedAt: houseTitleFromResponce.updatedAt,
});

module.exports = transformHouseTitleData;