var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  //res.send("hello")
  //res.render('index.ejs');
  res.render('index', {title: 'Developer Skills'});
});


module.exports = router;