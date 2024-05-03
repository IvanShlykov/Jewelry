/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Sizes',
      [
        {
          scale: '15',
        },
        {
          scale: '15,5',
        },
        {
          scale: '16',
        },
        {
          scale: '16,5',
        },
        {
          scale: '17',
        },
        {
          scale: '17,5',
        },
        {
          scale: '18',
        },
        {
          scale: '18,5',
        },
        {
          scale: 'Единый размер',
        },

      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Sizes', null, {});
  },
};