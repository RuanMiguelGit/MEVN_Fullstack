'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('orders',
    [
      {
        orderNfId:'order Data ',
        orderNumber:'123456789',
        orderPath:'order Data ',
        orderFileName:'order Data ',
        orderOriginalName:'order Data ',
        emissionDate:'order Data',
        pdfFile:'order Data ',
        emitedTo:'order Data ',
        nNf:'order Data ',
        CTE:'order Data ',
        value:'100',
        orderStatusBuyer:'ready ',
        orderStatusProvider:'order Data ',
        deliveryReceipt:'order Data ',
        cargoPackingList:'order Data ',
        deliveryCtrc:'order Data',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('orders', null, {}),
};