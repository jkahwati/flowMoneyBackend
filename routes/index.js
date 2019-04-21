var express = require('express');
var router = express.Router();

const userController = require('../controllers').user;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* User Router */
router.get('/api/user', userController.list);

module.exports = router;