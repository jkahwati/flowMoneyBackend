const Transaction = require('../models').Transaction;

module.exports = {
  list(req, res) {
    return Transaction
      .findAll()
      .then((transaction) => res.status(200).send(transaction))
      .catch((error) => { res.status(400).send(error); });
  }
}; 