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
      {
        id: 7,
        plate_number: "1777TTT",
        model: "Ford mustang",
        year: 2020,
        picture: "https://i.ibb.co/0DF5Lhw/ford-mustang.jpg",
        createdAt: "2023-08-24 21:16:40",
        updatedAt: "2023-08-24 21:16:40",
      },
      {
        id: 8,
        plate_number: "1888UUU",
        model: "Mercedes clase C",
        year: 2023,
        picture: "https://i.ibb.co/MkH2Frr/mercedes-clase-c.png",
        createdAt: "2023-08-24 21:18:06",
        updatedAt: "2023-08-24 21:18:06",
      },
      {
        id: 9,
        plate_number: "1999VVV",
        model: "Peugeot 208",
        year: 2019,
        picture: "https://i.ibb.co/M1xf6KL/peugeot-208.png",
        createdAt: "2023-08-24 21:19:34",
        updatedAt: "2023-08-24 21:19:34",
      },
      {
        id: 10,
        plate_number: "2000XXX",
        model: "Renault megane",
        year: 2021,
        picture: "https://i.ibb.co/WHfyBVL/renault-megane.jpg",
        createdAt: "2023-08-24 21:21:20",
        updatedAt: "2023-08-24 21:21:20",
      },
      {
        id: 11,
        plate_number: "2111YYY",
        model: "Seat ibiza",
        year: 2022,
        picture: "https://i.ibb.co/51fxPn1/seat-ibiza.jpg",
        createdAt: "2023-08-24 21:23:18",
        updatedAt: "2023-08-24 21:23:18",
      },
      {
        id: 12,
        plate_number: "2222JJJ",
        model: "Subaru impreza",
        year: 2023,
        picture: "https://i.ibb.co/hygz6z0/subaru-impreza.jpg",
        createdAt: "2023-08-24 21:24:40",
        updatedAt: "2023-08-24 21:24:40",
      }
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
