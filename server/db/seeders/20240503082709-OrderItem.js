/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'OrderItems',
      [
        {
          jewelryID: 1,
          price: 1000,
          count: 1,
          orderID: 1,
          sizeID: 1,
        },
        {
          jewelryID: 2,
          price: 2000,
          count: 2,
          orderID: 2,
          sizeID: 1,
        },
      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('OrderItems', null, {});
  },
};
