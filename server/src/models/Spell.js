const mongoose = require('mongoose');

const spellSchema = new mongoose.Schema({
  UK: { },
  EN: { },
}, {
  timestamps: true,
});

const Spell = mongoose.model('spells', spellSchema);

module.exports = Spell;
