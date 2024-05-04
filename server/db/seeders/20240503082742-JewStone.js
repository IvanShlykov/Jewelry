/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'JewStones',
      [
        {
          jewelryID: 4,
          stoneID: 2,
        },
        {
          jewelryID: 16,
          stoneID: 2,
        },
        {
          jewelryID: 22,
          stoneID: 2,
        },
        {
          jewelryID: 33,
          stoneID: 2,
        },
      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('JewStones', null, {});
  },
};
