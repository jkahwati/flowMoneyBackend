'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    amount: DataTypes.STRING,
    positive: DataTypes.BOOLEAN,
    transaction_date: DataTypes.DATE,
    status: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.User, {
      foreignKey: 'user_id',
      targetKey: 'id'
    });
  };
  return Transaction;
};