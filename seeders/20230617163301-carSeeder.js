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
    await queryInterface.bulkInsert("Cars", [
      {
        id: 1,
        plate_number: "1234ABC",
        model: "Ford fiesta",
        year: 1995,
        picture: "https://i.ibb.co/NSZBRqv/ford-fiesta.jpg",
        createdAt: "2023-06-17 00:00:00",
        updatedAt: "2023-06-17 00:00:00",
      },
      {
        id: 2,
        plate_number: "1235ABD",
        model: "Volkswagen golf",
        year: 2007,
        picture: "https://i.ibb.co/87mRMPP/golf.webp",
        createdAt: "2023-06-17 00:00:00",
        updatedAt: "2023-06-17 00:00:00",
      },
      {
        id: 3,
        plate_number: "1236ABE",
        model: "BMW serie3",
        year: 2020,
        picture: "https://i.ibb.co/qNPCsD1/BMW.webp",
        createdAt: "2023-06-17 00:00:00",
        updatedAt: "2023-06-17 00:00:00",
      },
      {
        id: 4,
        plate_number: "1237ABF",
        model: "Mini cooper",
        year: 2017,
        picture: "https://i.ibb.co/kQbCrTV/mini.png",
        createdAt: "2023-06-17 00:00:00",
        updatedAt: "2023-06-17 00:00:00",
      },
      {
        id: 5,
        plate_number: "1555RRR",
        model: "Audi a4",
        year: 2022,
        picture: "https://i.ibb.co/8DCvh3f/audi-a4.jpg",
        createdAt: "2023-08-24 21:12:58",
        updatedAt: "2023-08-24 21:12:58",
      },
      {
        id: 6,
        plate_number: "1666SSS",
        model: "Cadillac escalade",
        year: 2022,
        picture: "https://i.ibb.co/G2Yg8T7/cadillac-escalade.webp",
        createdAt: "2023-08-24 21:15:06",
        updatedAt: "2023-08-24 21:15:06",
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
