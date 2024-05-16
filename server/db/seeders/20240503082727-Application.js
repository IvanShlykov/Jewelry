/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Applications',
      [
        {
          userID: 2,
          status: 'Просчет',
          description: 'Хочу такое вот кольцо',
          photo: '/img/4a137916015ad5f874c59e40f9687804.jpeg'
        },

      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Applications', null, {});
  },
};