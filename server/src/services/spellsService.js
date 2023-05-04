const Spell = require('../models/Spell');

async function addSpellToDb(spell) {
  const { UK, EN } = spell;

  const newSpell = new Spell({ UK, EN });
  // console.log(newSpell);

  await newSpell.save();
}

async function addManySpellsToDB(spells) {
  await spells.forEach((spell) => addSpellToDb(spell));
  return 'success';
}

module.exports = {
  addSpellToDb,
  addManySpellsToDB,
};
