const Character = require('../models/Character');

module.exports = {
  create,
  getAll
};

async function create(req, res) {
  const character = await Character.create(req.body);
  res.status(201).json(character);
}

async function getAll(req, res) {
  const characters = await Character.find({});
  res.json(characters);
}
