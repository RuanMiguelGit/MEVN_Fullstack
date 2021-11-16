'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('buyers',
    [
      {
    name: 'fulano de silva',
    tradingName: 'Fulano',
    cashforceTax: 'simples',
    responsibleName: 'fulano da silva',
    responsibleEmail: 'fulano@beltrano.com',
    responsiblePosition: 'position x',
    responsiblePhone: '123456789',
    responsibleMobile: '123456789',
    website: 'fulano.com.br',
    postalCode: '111',
    address: 'rua dos fulanos',
    number: '000',
    complement: 'casa',
    neighborhood: 'bario dos fulanos',
    city: 'fulandia',
    state: 'fulanoPaulo',
    phoneNumber: '551699959',
    situation: 'good',
    situationDate: 'adasdas',
    confirm: true,
    email:'fulano@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date()
      },
     
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('buyers', null, {}),
};