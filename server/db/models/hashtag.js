const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hashtag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ JewHashtag }) {
      this.hasMany(JewHashtag, { foreignKey: 'hashtagID' });
    }
  }
  Hashtag.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Hashtag',
    }
  );
  return Hashtag;
};
