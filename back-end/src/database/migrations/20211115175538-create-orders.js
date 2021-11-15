'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderNfId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      orderPath: {
        type: Sequelize.STRING,
        unique: true
      },
      orderFileName: {
        type: Sequelize.STRING,
        unique: true
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        unique: true
      },
      emissionDate: {
        type: Sequelize.STRING
      },
      pdfFile: {
        type: Sequelize.STRING
      },
      emitedTo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nNf: {
        type: Sequelize.STRING
      },
      CTE: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
        references: {
          model: 'cnpjs',
          key: 'id'
        }
      },
      buyerId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
        references: {
          model: 'buyers',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      providerId : {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
        references: {
          model: 'providers',
          key: 'id'
        }
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: "0"
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: "0"
      },
      deliveryReceipt: {
        type: Sequelize.STRING
      },
      cargoPackingList: {
        type: Sequelize.STRING
      },
      deliveryCtrc: {
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
    await queryInterface.dropTable('orders');
  }
};