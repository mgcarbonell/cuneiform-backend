'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prompt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.prompt.belongsTo(models.entry)
      models.prompt.hasMany(models.entry)
    }
  };
  prompt.init({
    body: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'prompt',
  });
  return prompt;
};