'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JewHashtags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jewelryID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Jewelry',
          key: 'id'
        },
        onDelete: 'CASCADE',

      },
      hashtagID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Hashtags',
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('JewHashtags');
  }
};