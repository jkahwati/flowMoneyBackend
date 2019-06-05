// const User = require('../models').User;
// const Transaction = require('../models').Transaction;
const db = require('../config/queries')


module.exports.list = () => {
    console.log("validateEmail","app-ok");
    return db.health().then((status) => {
      console.log("status es ->",status)
      return status;
    })

}

module.exports.newTransaction = (transaction) => {
  console.log("validateEmail","app-ok");
  return db.createTransaction(transaction).then((status) => {
    console.log("status es ->",status)
    return status;
  })

}

