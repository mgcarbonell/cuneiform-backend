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
<<<<<<< HEAD
      models.entry.hasOne(models.prompt)
=======
      models.entry.belongsTo(models.prompt)
>>>>>>> submain
      models.entry.hasMany(models.like)
    }
  };
  entry.init({
    userId: DataTypes.INTEGER,
    promptId: {
      type: DataTypes.INTEGER,
<<<<<<< HEAD
      allowNull: true,
    },
    quote: {
      type: DataTypes.STRING,
      allowNull: true,
=======
      allowNull: true
    },
    quote: {
      type: DataTypes.STRING,
      allowNull: true
>>>>>>> submain
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