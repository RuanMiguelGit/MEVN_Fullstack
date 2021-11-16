'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('offers',
    [
      {
    tax: 'offer Data tax',
    tariff: 'offer Data tariff' ,
    adValorem: 'reais',
    float: 'no float',
    iof: 'no iof',
    expiresIn: new Date(),
    paymentStatusSponsor: true,
    paymentStatusProvider: true,
    createdAt: new Date(),
    updatedAt: new Date()
  
      },
     
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('offers', null, {}),
};