'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert("Users", [
        {
          id: 1,
          name: "Alberto",
          surnames: "Castillo Blasco",
          dni: "11111111A",
          email: "alcast@mail.com",
          phone: 611111111,
          createdAt: "2023-06-17 00:00:00",
          updatedAt: "2023-06-17 00:00:00",
        },
        {
          id: 2,
          name: "Cesar",
          surnames: "Mayoral Silvestre",
          dni: "22222222B",
          email: "cesmay@mail.com",
          phone: 622222222,
          createdAt: "2023-06-17 00:00:00",
          updatedAt: "2023-06-17 00:00:00",
        },
        {
          id: 3,
          name: "Jose",
          surnames: "Escamilla Valles",
          dni: "33333333C",
          email: "josesc@mail.com",
          phone: 633333333,
          createdAt: "2023-06-17 00:00:00",
          updatedAt: "2023-06-17 00:00:00",
        },
        {
          id: 4,
          name: "Miguel",
          surnames: "Revert Vaquero",
          dni: "44444444D",
          email: "migrev@mail.com",
          phone: 644444444,
          createdAt: "2023-06-17 00:00:00",
          updatedAt: "2023-06-17 00:00:00",
        },
      ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
