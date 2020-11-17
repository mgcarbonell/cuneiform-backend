'use strict';
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
      // define association here
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
  username: {
    type: DataTypes.STRING,
    validate: {
      len: {
        args: [1, 52],
        msg: 'Name must be between 1 and 52 characters'
      }
    }
  },
  name: {
    type: DataTypes.STRING,
    validate: {
      len: {
        args: [1, 99],
        msg: 'Name must be between 1 and 99 characters'
      }
    }
  },
  email: {
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