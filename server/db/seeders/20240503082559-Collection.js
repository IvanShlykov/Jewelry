/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Collections',
      [
        {
          name: 'База',
          photo: '/img/7_1.jpeg',
        },
        {
          name: 'Слушай своё сердце',
          photo: '/img/10_1.jpeg',
        },
        {
          name: 'н а ц е п и',
          photo: '/img/33_3.png',
        },

      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Collections', null, {});
  },
};
