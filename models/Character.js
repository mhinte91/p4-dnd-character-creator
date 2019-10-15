const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema(
  {
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
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Character', CharacterSchema);
