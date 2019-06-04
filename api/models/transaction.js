'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    amout: DataTypes.FLOAT,
    positive: DataTypes.BOOLEAN,
    transaction_date: DataTypes.DATE
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