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
    return queryInterface.bulkInsert('addresses', [
      {
        "name": "C. Carlo Magno 7, 4-2",
        "cp": "08760",
        "userId": 1
      },
      {
        "name": "Av. Diagonal 604",
        "cp": "08006",
        "userId": 2
      },
      {
        "name": "Sq. Rius i Taulet 4, 1-2",
        "cp": "08345",
        "userId": 3
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
