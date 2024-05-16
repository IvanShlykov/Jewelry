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
          img: 'https://static-maps.yandex.ru/v1?ll=30.473594,59.957052&lang=ru_RU&size=450,450&z=16&pt=30.473594,59.957052,pm2lbl&apikey=df88e39f-e5e3-4534-ac20-4a21cbed6048',
        },
      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Locations', null, {});
  },
};
