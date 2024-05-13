const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class JewHashtag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Hashtag, Jewelry }) {
      this.belongsTo(Hashtag, { foreignKey: 'hashtagID' });
      this.belongsTo(Jewelry, { foreignKey: 'jewelryID' });
    }
  }
  JewHashtag.init(
    {
      jewelryID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Jewelry',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      hashtagID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Hashtags',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'JewHashtag',
    }
  );
  return JewHashtag;
};
