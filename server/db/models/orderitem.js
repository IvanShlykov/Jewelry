const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, Jewelry, Size }) {
      this.belongsTo(Jewelry, { foreignKey: 'jewelryID' });
      this.belongsTo(Order, { foreignKey: 'orderID' });
      this.belongsTo(Size, { foreignKey: 'sizeID' });
    }
  }
  OrderItem.init(
    {
      jewelryID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Jewelry',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      price: DataTypes.INTEGER,
      count: DataTypes.INTEGER,
      orderID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      sizeID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Sizes',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'OrderItem',
    }
  );
  return OrderItem;
};
