const Spell = require('../models/Spell');

async function getAllSpells() {
  const spells = await Spell.find();

  if (!spells.length) throw new Error('No spells in DB');

  return spells;
}

async function getSpellById(spellId) {
  const spell = await Spell.findOne({ _id: spellId });

  if (!spell) throw new Error('No spell with this id');

  return spell;
}

async function addSpellToDb(spell) {
  const { UK, EN } = spell;

  const newSpell = new Spell({ UK, EN });

  await newSpell.save();
}

async function addManySpellsToDB(spells) {
  await spells.forEach((spell) => addSpellToDb(spell));
  return 'success';
}

module.exports = {
  getAllSpells,
  getSpellById,
  addSpellToDb,
  addManySpellsToDB,
};
