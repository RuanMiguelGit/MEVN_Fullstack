'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('buyers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cnpjId :{
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
        references: {
        model: 'cnpjs',
        key: 'id'
    }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tradingName: {
        allowNull: false,
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
      phoneNumber: {
        type: Sequelize.STRING
      },
      situation: {
        type: Sequelize.STRING
      },
      situationDate: {
        type: Sequelize.STRING
      },
      confirm: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('buyers');
  }
};


