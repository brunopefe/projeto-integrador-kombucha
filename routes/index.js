var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login.ejs', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

module.exports = router;
