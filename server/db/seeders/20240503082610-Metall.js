/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Metalls',
      [
        {
          name: 'Серебро 925',
        },
        {
          name: 'Белое Золото 585',
        },
        {
          name: 'Жёлтое Золото 585',
        },
        {
          name: 'Серебро 925 с позолотой',
        },

      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Metalls', null, {});
  },
};