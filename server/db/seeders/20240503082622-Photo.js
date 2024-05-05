/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Photos',
      [
        {
          jewelryID: 1,
          url: '11.jpg',
        },
        {
          jewelryID: 1,
          url: '12.jpg',
        },
        {
          jewelryID: 1,
          url: '13.jpg',
        },
      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Photos', null, {});
  },
};
