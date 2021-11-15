'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offers', {
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
    sponsorId: {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: true,
      references: {
        model: 'sponsors',
        key: 'id'
      }
    },
      tax: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tariff: {
        type: Sequelize.STRING,
        allowNull: false
      },
      adValorem: {
        type: Sequelize.STRING,
        allowNull: false
      },
      float: {
        type: Sequelize.STRING,
        allowNull: false
      },
      iof: {
        type: Sequelize.STRING,
        allowNull: false
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false
      },
      paymentStatusSponsor: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      paymentStatusProvider: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
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
    await queryInterface.dropTable('offers');
  }
};