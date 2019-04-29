'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Transactions', 'updatedAt', {
      allowNull: true,
      type: Sequelize.DATE
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Transactions', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE
    })
  }
};
