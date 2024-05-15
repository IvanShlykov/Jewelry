/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Favorites',
      [
        {
          userID: 2,
          jewelryID: 1,
        },
      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Favorites', null, {});
  },
};
