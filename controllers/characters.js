const Character = require('../models/Character');

module.exports = {
  create,
  getAll,
  delete: deleteOne,
  update
};

async function create(req, res) {
  const character = await Character.create(req.body);
  res.status(201).json(character);
}

async function getAll(req, res) {
  const characters = await Character.find({});
  res.json(characters);
}

async function deleteOne(req, res) {
  const deletedCharacter = await Character.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedCharacter);
}

async function update(req, res) {
  const updatedCharacter = await Character.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedCharacter);
}
