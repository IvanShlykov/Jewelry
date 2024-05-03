const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ JewStone }) {
      this.hasMany(JewStone, { foreignKey: 'stoneID' });
    }
  }
  Stone.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Stone',
    }
  );
  return Stone;
};
