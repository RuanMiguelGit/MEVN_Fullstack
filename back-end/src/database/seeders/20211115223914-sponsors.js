'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('sponsors',
    [
      {
        name: 'fulano responsavel',
        tradingName: 'nome de trade',
        cashforceTax: 'simples',
        responsibleName: 'fulano da silva',
        responsibleEmail: 'fulano@gmail.com',
        responsiblePosition: 'none',
        responsiblePhone: '123456789',
        responsibleMobile: '123456789',
        website: 'fulano.com.br',
        postalCode: '123456789',
        address: 'rua dos fulanos',
        number: '123456789',
        complement: 'casa',
        neighborhood: 'bairo dos fulanos',
        city: 'fulandia',
        state: 'fulanoPaulo',
        bank: 'banco none',
        bankAgency: 'agencia none',
        account: 'account none',
        documents: 'documento none',
        phoneNumber: '123456789',
        situation: 'good',
        situationDate: 'none',
        email: 'fulano@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('sponsors', null, {}),
};