const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
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
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Character', CharacterSchema);
