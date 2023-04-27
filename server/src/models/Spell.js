const mongoose = require('mongoose');

const spellSchema = mongoose.Schema();

const Spell = mongoose.model('spells', spellSchema);

module.exports = {
  Spell,
};
