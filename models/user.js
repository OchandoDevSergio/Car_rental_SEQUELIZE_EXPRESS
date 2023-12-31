'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Rental, {
        foreignKey: 'user_id'
      });

      User.belongsTo(models.Role, {
        foreignKey: 'role_id'
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    surnames: DataTypes.STRING,
    dni: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};