const transfromSpeelData = (spellFromResponce) => ({
  id: spellFromResponce._id,
  EN: { ...spellFromResponce.EN },
  UK: { ...spellFromResponce.UK },
  createdAt: spellFromResponce.createdAt,
  updatedAt: spellFromResponce.updatedAt,
});

module.exports = transfromSpeelData;
