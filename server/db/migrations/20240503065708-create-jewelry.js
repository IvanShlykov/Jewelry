/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jewelry', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      collectionID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Collections',
          key: 'id',
        },
      },
      typeID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Types',
          key: 'id',
        },
      },
      isSpecial: {
        type: Sequelize.BOOLEAN,
      },
      isNew: {
        type: Sequelize.BOOLEAN,
      },
      discountPrice: {
        type: Sequelize.INTEGER,
      },
      metallID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Metalls',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jewelry');
  },
};
