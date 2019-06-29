'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('users', [
      {
        "name": "Siziksu",
        "email": "siziksu@gmail.com",
        "age": 44,
        "date": new Date()
      },
      {
        "name": "Tetxiyo",
        "email": "tetxiyo@gmail.com",
        "age": 32,
        "date": new Date()
      },
      {
        "name": "Minhyo",
        "email": "minhyo@gmail.com",
        "age": 35,
        "date": new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
