'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        name:'fulano da silva',
        email:'fulano@gmail.com',
        phoneNumber:'123456789',
        mobile:'123456789',
        departament:'none',
        verificationCode:'123',
        emailChecked: true,
        cashforceAdm: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('AnuncioWebmotors', null, {}),
};