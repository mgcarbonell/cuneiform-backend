'use strict';
const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user.hasMany(models.entry)
      models.user.hasMany(models.comment)
      models.user.hasMany(models.like)
    }
    validPassword(passwordTyped) {
      return bcrypt.compareSync(passwordTyped, this.password);
    };

    // remove the password before serializing
    toJSON() {
      let userData = this.get();
      delete userData.password;
      return userData;
    }
  };

  user.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 52],
          msg: 'Name must be between 1 and 50 characters'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 20],
          msg: 'Username must be between 1 and 20 characters'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Invalid email address'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 99],
          msg: 'Password must be between 8 and 99 characters'
      }
    }
  }
},
    {
    sequelize,
    modelName: 'user',
  });
  return user;
};