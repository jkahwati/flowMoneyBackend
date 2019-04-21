const User = require('../models').User;


exports.list = function(req, res) {
  User.findAll()
  .then((users) => res.status(200).send(users))
  .catch((error) => { res.status(400).send(error); });
};

