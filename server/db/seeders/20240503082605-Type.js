/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Types',
      [
        {
          name: 'Кольца',
        },
        {
          name: 'Каффы',
        },

        {
          name: 'Серьги',
        },

        {
          name: 'Браслеты',
        },

        {
          name: 'Цепи',
        },

        {
          name: 'Подвески',
        },
      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Types', null, {});
  },
};
