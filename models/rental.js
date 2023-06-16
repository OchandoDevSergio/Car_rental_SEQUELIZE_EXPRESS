'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rental.belongsTo(models.User, {
        foreignKey: 'user_id'
      });

      Rental.belongsTo(models.Car, {
        foreignKey: 'car_id'
      });
    }
  }
  Rental.init({
    rental_date: DataTypes.STRING,
    return_date: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Rental',
  });
  return Rental;
};