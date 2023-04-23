const Spell = require('../models/Spell')

const findAllSpells = async (language) => {
  if (language) {
    return await Spell.findAll({
      attributes: ['id', language]
    });
  } else {
    return await Spell.findAll();
  }
}

const findSpell = async (id) => {
  return await Spell.findOne({
    where: { id: id },
  });
}

const editSpell = async (id, language, data) => {
  const spell = await findSpell(id);

  return await spell.update({
    [language]: data
  });
}

const createSpell = async (language, data) => {
  return await Spell.create({
    [language]: data
  });
}

const deleteSpell = async (id) => {
  return await Spell.destroy({
    where: { id: id },
  });
}


module.exports = { findAllSpells, findSpell, editSpell, createSpell, deleteSpell };


