/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'ColPhotos',
      [
        {
          url: '/img/54_2.png',
          collectionID: 3,
        },
        {
          url: '/img/55_1.png',
          collectionID: 3,
        },
        {
          url: '/img/45_3.png',
          collectionID: 3,
        },
        {
          url: '/img/25_2.jpeg',
          collectionID: 3,
        },
        {
          url: '/img/5_2.jpeg',
          collectionID: 2,
        },
        {
          url: '/img/3_1.jpeg',
          collectionID: 2,
        },
        {
          url: '/img/5_1.jpeg',
          collectionID: 2,
        },
        {
          url: '/img/15_3.jpeg',
          collectionID: 2,
        },
      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('ColPhotos', null, {});
  },
};
