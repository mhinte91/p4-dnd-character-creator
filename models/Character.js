const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  race: {
    type: String,
    required: true,
    default: 'Dragonborn'
  },
  charClass: {
    type: String,
    required: true,
    default: 'Barbarian'
  },
  bio: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Character', CharacterSchema);
