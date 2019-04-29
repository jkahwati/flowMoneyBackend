module.exports = function(app) {

  var userController = require('../controllers/users');

  app.route('/users')
    .get(userController.list)

  app.route('/user/:id')
    .post(userController.get) 
    
};