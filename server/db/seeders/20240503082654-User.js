const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Иван',
          email: 'admin@admin.ru',
          phone: '8-931-239-11-03',
          password: await bcrypt.hash('123456', 10),
          isAdmin: true,
        },
        {
          name: 'Никита',
          email: 'ivan888@mail.ru',
          phone: '8-931-239-11-03',
          password: await bcrypt.hash('123456', 10),
          isAdmin: false,
        },
      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
