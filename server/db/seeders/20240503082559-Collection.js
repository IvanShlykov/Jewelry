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
          photo: '/CollectionIMG/Heart.jpg',
        },
        {
          name: 'н а ц е п и',
          photo: '/CollectionIMG/chain.JPG',
        },

      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Collections', null, {});
  },
};
