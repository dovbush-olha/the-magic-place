const mongoose = require('mongoose');

const spellSchema = mongoose.Schema({
  UK: {
    name: {
      type: String,
      reguired: true,
    },
    book: {
      type: String,
      reguired: true,
    },
    description: {
      type: String,
      required: true,
    },
    interestingFact: {
      type: String,
      required: true,
    },
  },
  EN: {
    name: {
      type: String,
      reguired: true,
    },
    book: {
      type: String,
      reguired: true,
    },
    description: {
      type: String,
      required: true,
    },
    interestingFact: {
      type: String,
      required: true,
    },
  },
}, {
  timestamps: true,
});

const Spell = mongoose.model('spells', spellSchema);

module.exports = Spell;
