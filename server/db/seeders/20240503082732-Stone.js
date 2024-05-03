/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Stones',
      [
        {
          title: 'Фианит',
        },
        {
          title: 'Алмаз',
        },
        {
          title: 'Джевалит',
        },

      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Stones', null, {});
  },
};