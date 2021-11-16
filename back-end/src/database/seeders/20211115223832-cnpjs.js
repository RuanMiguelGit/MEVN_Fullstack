'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('cnpjs',
    [
      {
        cnpj: '11111',
        companyType:'COMPANY MOCK',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('cnpjs', null, {}),
};