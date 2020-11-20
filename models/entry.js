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
      models.entry.belongsTo(models.user)
      // models.entry.hasOne(models.prompt)
      models.entry.hasMany(models.like)
    }
  };
  entry.init({
    userId: DataTypes.INTEGER,
    promptId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    isPublic: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'entry',
  });
  return entry;
};