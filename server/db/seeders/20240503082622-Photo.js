/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Photos',
      [
        {
          jewelryID: 1,
          url: 'https://drive.google.com/drive/folders/1QyouNQuXlWgBnAvPcVvLfPz-ruYmfaoT'
        },

      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Photos', null, {});
  },
};