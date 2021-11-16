'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('orderportions',
    [
      {
        nDup:'abcdef',
        dVenc:'today',
        vDup:'no',
        availableToMarket: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('orderportions', null, {}),
};