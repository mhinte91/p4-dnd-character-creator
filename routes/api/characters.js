const express = require('express');
const router = express.Router();
const charactersCtrl = require('../../controllers/characters');

/*---------- Public Routes ----------*/
router.get('/', charactersCtrl.getAll);
router.delete('/:id', charactersCtrl.delete);
router.put('/:id', charactersCtrl.update);
/*---------- Protected Routes ----------*/
router.post('/', charactersCtrl.create);

module.exports = router;
