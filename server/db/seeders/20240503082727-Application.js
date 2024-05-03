/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Applications',
      [
        {
          userID: 2,
          status: 'Просчет',
          description: 'Хочу такое вот кольцо',
          photo: 'https://drive.google.com/drive/folders/1QyouNQuXlWgBnAvPcVvLfPz-ruYmfaoT'
        },

      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Applications', null, {});
  },
};