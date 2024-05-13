const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Size, Jewelry }) {
      this.belongsTo(Jewelry, { foreignKey: 'jewelryID' });
      this.belongsTo(Size, { foreignKey: 'sizeID' });
    }
  }
  Stock.init(
    {
      sizeID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Sizes',
          key: 'id',
        },
      },
      jewelryID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Jewelry',
          key: 'id',
        },
        onDelete: 'CASCADE',

      },
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Stock',
    }
  );
  return Stock;
};
