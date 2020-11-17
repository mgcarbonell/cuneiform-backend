'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  entry.init({
    userId: DataTypes.INTEGER,
    promptId: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    isPublic: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'entry',
  });
  return entry;
};