var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET about me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project Page' });
});

/* GET contact us page. */
router.get('/contactus', function(req, res, next) {
  res.render('index', { title: 'Contact Us' });
});

module.exports = router;
