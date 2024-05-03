/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Hashtags',
      [
        {
          title: 'Круглое',
        },
        {
          title: 'Сердечки',
        },
        {
          title: 'Надписи',
        },

      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Hashtags', null, {});
  },
};