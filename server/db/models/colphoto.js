const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ColPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Collection }) {
      this.belongsTo(Collection, {
        foreignKey: 'collectionID',
        // onDelete: 'CASCADE',
      });
    }
  }
  ColPhoto.init(
    {
      url: DataTypes.STRING,
      collectionID: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Collections',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'ColPhoto',
    }
  );
  return ColPhoto;
};
