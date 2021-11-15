'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderportions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
        references: {
          model: 'orders',
          key: 'id'
        }
      },
      nDup: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dVenc: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vDup: {
        type: Sequelize.STRING,
        allowNull: false
      },
      availableToMarket: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orderportions');
  }
};