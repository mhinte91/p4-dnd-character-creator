const Character = require('../models/Character');

module.exports = {
  create
};

async function create(req, res) {
  const character = await Character.create(req.body);
  res.status(201).json(character);
}
