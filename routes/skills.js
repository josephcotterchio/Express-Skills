var express = require('express');
var router = express.Router();
const skillCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillCtrl.index);
router.get('/show/:id', skillCtrl.show);
router.get('/newskill', skillCtrl.newskill);
router.post('/add', skillCtrl.add);

//router.delete('/:id', skillsCtrl.delete);

module.exports = router;