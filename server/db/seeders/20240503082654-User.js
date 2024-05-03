const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Иван',
          email: '1@1',
          phone: '8-931-239-11-03',
          password: await bcrypt.hash('123', 10),
          isAdmin: true,
        },
        {
          name: 'Никита',
          email: '2@2',
          phone: '8-931-239-11-03',
          password: await bcrypt.hash('123', 10),
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
