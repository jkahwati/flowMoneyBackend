'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Transactions', 'createdAt', {
      allowNull: true,
      type: Sequelize.DATE
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Transactions', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE
    })
  }
};
