/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'ColPhotos',
      [
        {
          url: '/CollectionIMG/Chain/IMG_8447.PNG',
          collectionID: 3,
        },
        {
          url: '/CollectionIMG/Chain/IMG_8772.PNG',
          collectionID: 3,
        },
        {
          url: '/CollectionIMG/Chain/IMG_8930.JPG',
          collectionID: 3,
        },
        {
          url: '/CollectionIMG/Chain/IMG_9792.jpg',
          collectionID: 3,
        },
        {
          url: '/CollectionIMG/Heart/0DF68810-4542-4695-B35B-54D80F97736E.jpg',
          collectionID: 2,
        },
        {
          url: '/CollectionIMG/Heart/3AD6900A-EDAA-41AA-AB26-2228AEDA5490.jpg',
          collectionID: 2,
        },
        {
          url: '/CollectionIMG/Heart/6D5344F1-97C8-4C8C-9D60-CC801593C20B.jpg',
          collectionID: 2,
        },
        {
          url: '/CollectionIMG/Heart/45C9FDC6-5FE2-43FE-9A00-C6B0F60D5AE3.jpg',
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
