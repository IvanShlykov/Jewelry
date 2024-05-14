const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Jewelry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Metall,
      Type,
      Collection,
      Favorite,
      JewHashtag,
      Stock,
      Photo,
      OrderItem,
      JewStone,
    }) {
      this.belongsTo(Collection, { foreignKey: 'collectionID' });
      this.belongsTo(Type, { foreignKey: 'typeID' });
      this.belongsTo(Metall, { foreignKey: 'metallID' });
      this.hasMany(OrderItem, { foreignKey: 'jewelryID' });
      this.hasMany(Photo, { foreignKey: 'jewelryID' });
      this.hasMany(Stock, { foreignKey: 'jewelryID' });
      this.hasMany(Favorite, { foreignKey: 'jewelryID' });
      this.hasMany(JewHashtag, { foreignKey: 'jewelryID' });
      this.hasMany(JewStone, { foreignKey: 'jewelryID' });
    }
  }
  Jewelry.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      collectionID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Collections',
          key: 'id',
        },
      },
      typeID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Types',
          key: 'id',
        },
      },
      isSpecial: DataTypes.BOOLEAN,
      isNew: DataTypes.BOOLEAN,
      discountPrice: DataTypes.INTEGER,
      metallID: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        // onUpdate: 'CASCADE',

        references: {
          model: 'Metalls',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Jewelry',
    }
  );
  return Jewelry;
};
