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
    await queryInterface.bulkInsert("Rentals", [
      {
        id: 1,
        user_id: 1,
        car_id: 2,
        rental_date: "2023-06-10 15:00:00",
        return_date: "2023-06-15 15:00:00",
        price: 100.99,
        createdAt: "2023-06-17 00:00:00",
        updatedAt: "2023-06-17 00:00:00",
      },
      {
        id: 2,
        user_id: 2,
        car_id: 2,
        rental_date: "2023-06-05 15:00:00",
        return_date: "2023-06-08 15:00:00",
        price: 60.99,
        createdAt: "2023-06-17 00:00:00",
        updatedAt: "2023-06-17 00:00:00",
      },
      {
        id: 3,
        user_id: 3,
        car_id: 1,
        rental_date: "2023-06-01 15:00:00",
        return_date: "2023-06-03 15:00:00",
        price: 35.99,
        createdAt: "2023-06-17 00:00:00",
        updatedAt: "2023-06-17 00:00:00",
      },
      {
        id: 4,
        user_id: 4,
        car_id: 1,
        rental_date: "2023-05-20 15:00:00",
        return_date: "2023-06-01 15:00:00",
        price: 189.99,
        createdAt: "2023-06-17 00:00:00",
        updatedAt: "2023-06-17 00:00:00",
      },
      {
        id: 5,
        user_id: 1,
        car_id: 3,
        rental_date: "2023-03-20 15:00:00",
        return_date: "2023-03-25 15:00:00",
        price: 152.99,
        createdAt: "2023-06-17 00:00:00",
        updatedAt: "2023-06-17 00:00:00",
      },
      {
        id: 6,
        user_id: 2,
        car_id: 3,
        rental_date: "2023-04-10 15:00:00",
        return_date: "2023-04-15 15:00:00",
        price: 152.99,
        createdAt: "2023-06-17 00:00:00",
        updatedAt: "2023-06-17 00:00:00",
      },
      {
        id: 7,
        user_id: 3,
        car_id: 4,
        rental_date: "2023-01-10 15:00:00",
        return_date: "2023-01-17 15:00:00",
        price: 175.99,
        createdAt: "2023-06-17 00:00:00",
        updatedAt: "2023-06-17 00:00:00",
      },
      {
        id: 8,
        user_id: 4,
        car_id: 4,
        rental_date: "2023-02-11 15:00:00",
        return_date: "2023-02-12 15:00:00",
        price: 25.99,
        createdAt: "2023-06-17 00:00:00",
        updatedAt: "2023-06-17 00:00:00",
      },
      {
        id: 9,
        user_id: 3,
        car_id: 4,
        rental_date: "2023-04-10 15:00:00",
        return_date: "2023-04-11 15:00:00",
        price: 25.99,
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
