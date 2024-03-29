'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('providers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tradingName: {
        type: Sequelize.STRING
      },
      cashforceTax: {
        type: Sequelize.STRING
      },
      responsibleName: {
        type: Sequelize.STRING
      },
      responsibleEmail: {
        type: Sequelize.STRING
      },
      responsiblePosition: {
        type: Sequelize.STRING
      },
      responsiblePhone: {
        type: Sequelize.STRING
      },
      responsibleMobile: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      postalCode: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      complement: {
        type: Sequelize.STRING
      },
      neighborhood: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      bank: {
        type: Sequelize.STRING
      },
      bankAgency: {
        type: Sequelize.STRING
      },
      account: {
        type: Sequelize.STRING
      },
      documents: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      situation: {
        type: Sequelize.STRING
      },
      situationDate: {
        type: Sequelize.STRING
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'cnpjs',
          key: 'id'
        }
      },
      email: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('providers');
  }
};