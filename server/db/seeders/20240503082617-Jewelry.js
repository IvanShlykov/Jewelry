/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Jewelry',
      [
        {
          name: 'Кольцо Сфера',
          price: 4050,
          description: 'Невероятное кольцо',
          collectionID: 1,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Серьги-пусеты Сердце',
          price: 3900,
          description: 'Серьги-гвоздики из серебра',
          collectionID: 2,
          typeID: 3,
          isSpecial: false,
          isNew: true,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Хуп с подвеской Сердечко',
          price: 5500,
          description: 'Моносерьга, Стоимость пары — 10 000 руб.',
          collectionID: 2,
          typeID: 3,
          isSpecial: false,
          isNew: true,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Кольцо с желтым фианитом',
          price: 4300,
          description: 'Вставка фианит',
          collectionID: 1,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 2,
        },
        {
          name: 'Цепочка с подвеской сердечко',
          price: 5500,
          description: '',
          collectionID: 2,
          typeID: 5,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Серьги-пуссеты Осирис',
          price: 4050,
          description: 'Серьги-гвоздики из серебра. Диаметр 1см. Вес 2гр.',
          collectionID: 1,
          typeID: 3,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Подвеска Сердце с позолотой',
          price: 4900,
          description: 'Серебро 925 с позолотой',
          collectionID: 2,
          typeID: 6,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 4,
        },
        {
          name: 'Хуп с подвеской Сердце',
          price: 6500,
          description: 'Моносерьга, Стоимость пары — 11 000 руб.',
          collectionID: 2,
          typeID: 3,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Кольцо ОО',
          price: 5000,
          description: '',
          collectionID: 1,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 3,
        },
        {
          name: 'Подвеска Сердце',
          price: 4400,
          description: '',
          collectionID: 2,
          typeID: 6,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Кафф Сердце',
          price: 3100,
          description: '',
          collectionID: 2,
          typeID: 2,
          isSpecial: false,
          isNew: true,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Цепочка с подвеской Сердце',
          price: 6400,
          description: '',
          collectionID: 2,
          typeID: 6,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Моносерьга',
          price: 4400,
          description: '',
          collectionID: 2,
          typeID: 3,
          isSpecial: false,
          isNew: true,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Кольцо с сердечком',
          price: 5500,
          description: '',
          collectionID: 2,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 2,
        },
        {
          name: 'Кольцо с сердцем',
          price: 7500,
          description: '',
          collectionID: 2,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 2,
        },
        {
          name: 'Кольцо с зеленым фианитом',
          price: 4300,
          description: 'Размер фианита 8мм',
          collectionID: 1,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 3,
        },
        {
          name: 'Плетенки',
          price: 2700,
          description: '',
          collectionID: 1,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Серьги поинт позолота',
          price: 3050,
          description: 'вес 0,8гр. Позолота.',
          collectionID: 1,
          typeID: 3,
          isSpecial: false,
          isNew: true,
          discountPrice: 800,
          metallID: 4,
        },
        {
          name: 'Серьги поинт с диском позолота',
          price: 3050,
          description: 'вес 0,9гр. Позолота.',
          collectionID: 1,
          typeID: 3,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 4,
        },
        {
          name: 'Галстук О',
          price: 5400,
          description: 'длина 90см',
          collectionID: 1,
          typeID: 5,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Цепь якорная',
          price: 14000,
          description: '',
          collectionID: 3,
          typeID: 5,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 4,
        },
        {
          name: 'Кольцо с розовым фианитом',
          price: 4300,
          description: '',
          collectionID: 1,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 2,
        },
        {
          name: 'Кольцо с фианитом аметист',
          price: 4300,
          description: 'Размер фианита 8мм',
          collectionID: 1,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 3,
        },
        {
          name: 'Кольцо душа',
          price: 3150,
          description: '',
          collectionID: 3,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Серьги кликеры',
          price: 4300,
          description: '',
          collectionID: 1,
          typeID: 3,
          isSpecial: false,
          isNew: true,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Серьги Нити',
          price: 3400,
          description: 'Вес 1,7гр',
          collectionID: 1,
          typeID: 3,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 3,
        },
        {
          name: 'Кольцо О',
          price: 2600,
          description: '',
          collectionID: 1,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Серьги Мебиус',
          price: 4750,
          description: 'Длина 9см. Вес 4,5гр',
          collectionID: 1,
          typeID: 3,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 2,
        },
        {
          name: 'Кольцо цепь',
          price: 6000,
          description: '',
          collectionID: 3,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 4,
        },
        {
          name: 'Серьги Нити позолота',
          price: 3700,
          description: 'Розовая позолота',
          collectionID: 1,
          typeID: 3,
          isSpecial: false,
          isNew: true,
          discountPrice: 800,
          metallID: 4,
        },
        {
          name: 'Серьги Поинт с диском',
          price: 2700,
          description: 'Вес 0,9гр',
          collectionID: 1,
          typeID: 3,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Серьги скрепки',
          price: 3400,
          description: '',
          collectionID: 1,
          typeID: 3,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Кольцо с цепями',
          price: 8000,
          description: '',
          collectionID: 3,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Кольцо с фианитом',
          price: 4300,
          description: '',
          collectionID: 1,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 2,
        },
        {
          name: 'Кольцо кольлчуга',
          price: 9000,
          description: 'На фото представленно два кольца',
          collectionID: 3,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Кольцо с тонкой проволокой',
          price: 8000,
          description: '',
          collectionID: 1,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Кольцо печатка средняя',
          price: 4000,
          description: '',
          collectionID: 1,
          typeID: 1,
          isSpecial: false,
          isNew: true,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Серьги три звена',
          price: 4750,
          description: 'Длина сережок 2,5см. Вес 3,4гр.',
          collectionID: 3,
          typeID: 3,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Кафф нить',
          price: 1600,
          description: '',
          collectionID: 3,
          typeID: 2,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 3,
        },
        {
          name: 'Кафф сдвоенный',
          price: 2250,
          description: '',
          collectionID: 3,
          typeID: 2,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 4,
        },
        {
          name: 'Браслет кафф',
          price: 4200,
          description: 'Толщина проволоки 4мм',
          collectionID: 3,
          typeID: 4,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 2,
        },
        {
          name: 'Серьги звено',
          price: 2200,
          description: 'Вес 1,4гр',
          collectionID: 3,
          typeID: 3,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 3,
        },
        {
          name: 'Кольцо узел',
          price: 4750,
          description: '',
          collectionID: 1,
          typeID: 1,
          isSpecial: false,
          isNew: true,
          discountPrice: 800,
          metallID: 3,
        },
        {
          name: 'Кафф с цепочками',
          price: 3000,
          description: '',
          collectionID: 3,
          typeID: 2,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Серьги со скосами',
          price: 5850,
          description: 'Длина 4см., толщина 2мм. Вес 5,8гр.',
          collectionID: 1,
          typeID: 3,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 2,
        },
        {
          name: 'Браслет цепь',
          price: 7000,
          description: '',
          collectionID: 3,
          typeID: 4,
          isSpecial: false,
          isNew: true,
          discountPrice: 800,
          metallID: 4,
        },
        {
          name: 'Серьга булавка',
          price: 2700,
          description: '',
          collectionID: 1,
          typeID: 3,
          isSpecial: false,
          isNew: true,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Серьга Поинт',
          price: 2700,
          description: 'Вес 0,8гр.',
          collectionID: 1,
          typeID: 3,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Кафф двойной',
          price: 1600,
          description: '',
          collectionID: 1,
          typeID: 2,
          isSpecial: false,
          isNew: true,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Кольцо печатка узкая',
          price: 3600,
          description: '',
          collectionID: 1,
          typeID: 1,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Кафф широкий простой',
          price: 1800,
          description: '',
          collectionID: 3,
          typeID: 2,
          isSpecial: false,
          isNew: true,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Серьга Хупы',
          price: 4500,
          description: 'Диаметр 16мм. Вес 3,6гр.',
          collectionID: 1,
          typeID: 3,
          isSpecial: false,
          isNew: true,
          discountPrice: 800,
          metallID: 3,
        },
        {
          name: 'Серьга Эрзет',
          price: 4300,
          description: 'Вес 3,5гр.',
          collectionID: 1,
          typeID: 3,
          isSpecial: false,
          isNew: false,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Кольцо разомкнутое',
          price: 2950,
          description: '',
          collectionID: 1,
          typeID: 1,
          isSpecial: false,
          isNew: true,
          discountPrice: 800,
          metallID: 1,
        },
        {
          name: 'Кольцо D',
          price: 2800,
          description: 'На фото предстваленно три кольца. Из-за нестанартной формы кольцо имеет три размера. S-16-16.5, M-17-17.5; L-18-18.5',
          collectionID: 1,
          typeID: 1,
          isSpecial: false,
          isNew: true,
          discountPrice: 800,
          metallID: 1,
        },
      ].map((el) => ({ ...el, createdAt: new Date(), updatedAt: new Date() })),
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Jewelry', null, {});
  },
};