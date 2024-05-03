const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Metall extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Jewelry }) {
      this.hasMany(Jewelry, { foreignKey: 'metallID' });
    }
  }
  Metall.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Metall',
    }
  );
  return Metall;
};
