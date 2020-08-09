var express = require('express');
var router = express.Router();
const skillCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillCtrl.index);
router.get('/show/:id', skillCtrl.show);
router.get('/newskill', skillCtrl.newskill);

//router.delete('/:id', skillsCtrl.delete);

module.exports = router;