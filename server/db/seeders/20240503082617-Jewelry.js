/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Jewelry',
      [
        {
          name: 'Кольцо 1',
          price: 1000,
          description: 'Невероятное кольцо',
          collectionID: 1,
          typeID: 1,
          isSpecial: true,
          isNew: true,
          discountPrice: 800,
          metallID: 1,
        },

      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Jewelry', null, {});
  },
};