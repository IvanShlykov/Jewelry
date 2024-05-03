const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Jewelry }) {
      this.belongsTo(User, { foreignKey: 'userID' });
      this.belongsTo(Jewelry, { foreignKey: 'jewelryID' });
    }
  }
  Favorit.init(
    {
      userID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      jewelryID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Jewelry',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Favorit',
    }
  );
  return Favorit;
};
