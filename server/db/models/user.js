const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, Favorite, Application }) {
      this.hasMany(Order, { foreignKey: 'userID' });
      this.hasMany(Favorite, { foreignKey: 'userID' });
      this.hasMany(Application, { foreignKey: 'userID' });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin:{
      type: DataTypes.BOOLEAN,
      defaultValue: false}
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
