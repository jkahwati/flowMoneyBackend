module.exports = function(app) {

  var userController = require('../controllers/users');

  app.route('/users')
    .get(userController.list)
};