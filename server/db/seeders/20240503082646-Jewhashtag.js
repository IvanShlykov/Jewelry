/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'JewHashtags',
      [
        {
          jewelryID: 1,
          hashtagID: 1,
        },
        {
          jewelryID: 1,
          hashtagID: 2,
        },
      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('JewHashtags', null, {});
  },
};
