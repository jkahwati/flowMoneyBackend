const User = require('../models').User;
const Transaction = require('../models').Transaction;


exports.list = function(req, res) {
  User.findAll({
    include: [{
      model: Transaction,
      required: true
     }]
  })
  .then((users) => res.status(200).send(users))
  .catch((error) => { res.status(400).send(error) })
};

exports.get = function(req, res) {
  User.findByPk(req.params.id)
  .then( (user) => res.status(200).send(user))
  .catch((error) => {res.status(400).send(error.stack) })
};
