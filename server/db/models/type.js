const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Jewelry }) {
      this.hasMany(Jewelry, { foreignKey: 'jewelryID' });
    }
  }
  Type.init(
    {
      name: DataTypes.STRING,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Type',
    }
  );
  return Type;
};
