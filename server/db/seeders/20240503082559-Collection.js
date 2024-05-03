/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Collections',
      [
        {
          name: 'Весна',
          photo: '/CollectionIMG/Весна.jpg',
        },
        {
          name: 'Зима',
          photo: '/CollectionIMG/Зима.jpg',
        },
      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Collections', null, {});
  },
};
