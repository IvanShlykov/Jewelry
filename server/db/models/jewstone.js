const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class JewStone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Stone, Jewelry }) {
      this.belongsTo(Stone, { foreignKey: 'stoneID' });
      this.belongsTo(Jewelry, { foreignKey: 'jewelryID' });
    }
  }
  JewStone.init(
    {
      jewelryID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Jewelry',
          key: 'id',
        },
      },
      stoneID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Stones',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'JewStone',
    }
  );
  return JewStone;
};
