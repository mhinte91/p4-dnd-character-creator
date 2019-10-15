const Character = require('../models/Character');
const User = require('../models/User');

module.exports = {
  create,
  getAll,
  delete: deleteOne,
  update
};

function create(req, res) {
  const character = {
    ...req.body,
    user: req.body.user
  };
  Character.create(character)
    .then(character => {
      res.status(200).send(character);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('error');
    });
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
