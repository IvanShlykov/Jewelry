/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Locations',
      [
        {
          city: 'СПБ',
          adress: 'Боткинская 15',
          phone: '89312391103',
          time: '11:00',
          img: 'https://etu.ru/assets/cache/images/en/why-us/cultural-capital/1280x854-spb-view-bridges01.0cb.jpg',
        },
      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Locations', null, {});
  },
};
