'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.like.belongsTo(user)
      models.like.belongsTo(entry)
    }
  };
  like.init({
    userId: DataTypes.INTEGER,
    entryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'like',
  });
  return like;
};