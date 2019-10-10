const express = require('express');
const router = express.Router();
const charactersCtrl = require('../../controllers/characters');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/

router.post('/', charactersCtrl.create);

module.exports = router;
