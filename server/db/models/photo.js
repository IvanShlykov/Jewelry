const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Jewelry }) {
      this.belongsTo(Jewelry, { foreignKey: 'jewelryID' });
    }
  }
  Photo.init(
    {
      jewelryID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Jewelry',
          key: 'id',
        },
        onDelete: 'CASCADE',

      },
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Photo',
    }
  );
  return Photo;
};
