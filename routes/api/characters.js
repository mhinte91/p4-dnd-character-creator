const express = require('express');
const router = express.Router();
const charactersCtrl = require('../../controllers/characters');

/*---------- Public Routes ----------*/
/*---------- Protected Routes ----------*/

router.get('/', charactersCtrl.getAll);
router.delete('/:id', charactersCtrl.delete);
router.put('/:id', charactersCtrl.update);
router.post('/', checkAuth, charactersCtrl.create);

/*------ Helper Functions -------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;
