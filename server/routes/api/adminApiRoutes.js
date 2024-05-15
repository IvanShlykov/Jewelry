const router = require('express').Router();
const {
  Collection,
  Jewelry,
  ColPhoto,
  Metall,
  Type,
  JewHashtag,
  Stock,
  Photo,
  JewStone,
  Hashtag,
  Size,
  Location,
  Application,
  User,
  Order,
  OrderItem,
} = require('../../db/models');
const fileupload = require('../../utils/fileUpload');

router.get('/collection', async (req, res) => {
  try {
    const collections = await Collection.findAll({ order: [['id', 'ASC']] });
    res.status(200).json({ collections });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/collection', async (req, res) => {
  try {
    const file = req.files && req.files.photo;
    let img;
    if (file) {
      img = await fileupload(file);
    } else {
      img = '/img/placeholder.png';
    }
    const { name } = req.body;
    const collection = await Collection.create({ name, photo: img });
    res.status(200).json({ collection });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/collection/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const jewelrys = await Jewelry.findAll({ where: { collectionID: id } });
    if (jewelrys.length) {
      for (let i = 0; i < jewelrys.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        await Jewelry.update(
          { collectionID: 1 },
          { where: { id: jewelrys[i].id } }
        );
      }
    }

    await Collection.destroy({ where: { id } });
    res.status(200).json(+id);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/collection/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const file = req.files && req.files.photo;
    let img;
    if (file) {
      img = await fileupload(file);
      await Collection.update({ name, photo: img }, { where: { id } });
    } else {
      await Collection.update({ name }, { where: { id } });
    }

    const collection = await Collection.findOne({ where: { id } });
    res.status(200).json({ collection });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// ColPhoto
router.get('/colphotos', async (req, res) => {
  try {
    const colPhotos = await ColPhoto.findAll({
      include: Collection,
      order: [['collectionID', 'ASC']],
    });
    res.status(200).json({ colPhotos });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/colphoto', async (req, res) => {
  try {
    const file = req.files && req.files.photo;
    let img;
    if (file) {
      img = await fileupload(file);
    } else {
      img = '/img/placeholder.png';
    }
    const { collectionID } = req.body;

    let colPhoto = await ColPhoto.create({
      collectionID: +collectionID,
      url: img,
    });
    colPhoto = await ColPhoto.findOne({
      where: { id: colPhoto.id },
      include: Collection,
    });
    res.status(200).json({ colPhoto });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/colphoto/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await ColPhoto.destroy({ where: { id } });
    res.status(200).json(+id);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// Metalls
router.get('/metalls', async (req, res) => {
  try {
    const metalls = await Metall.findAll({ order: [['id', 'ASC']] });
    res.status(200).json({ metalls });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/metall', async (req, res) => {
  try {
    console.log(req.body);
    const { name } = req.body;
    const metall = await Metall.create({ name });
    res.status(200).json({ metall });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/metall/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Metall.destroy({ where: { id } });
    res.status(200).json(+id);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/metall/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await Metall.update({ name }, { where: { id } });
    const metall = await Metall.findOne({ where: { id } });
    res.status(200).json({ metall });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// Jewelry
router.get('/jewelrys', async (req, res) => {
  try {
    const jewelrys = await Jewelry.findAll({
      include: [
        { model: Collection },
        { model: Metall },
        { model: Type },
        { model: JewHashtag, include: [{ model: Hashtag }] },
        { model: Stock, include: [{ model: Size }] },
        { model: Photo },
        { model: JewStone },
      ],
      order: [['id', 'ASC']],
    });
    res.status(200).json({ jewelrys });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/jewelry/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, collectionID, typeID, isNew, metallID } =
      req.body;
    await Jewelry.update(
      {
        name,
        price,
        description,
        collectionID,
        typeID,
        isNew,
        metallID: +metallID,
      },
      { where: { id: +id } }
    );
    const jewelry = await Jewelry.findOne({
      where: { id: +id },
      include: [
        { model: Collection },
        { model: Metall },
        { model: Type },
        { model: JewHashtag, include: [{ model: Hashtag }] },
        { model: Stock, include: [{ model: Size }] },
        { model: Photo },
        { model: JewStone },
      ],
    });
    res.status(200).json({ jewelry });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/jewelry', async (req, res) => {
  try {
    let jewelry = await Jewelry.create(req.body);
    jewelry = await Jewelry.findOne({
      where: { id: jewelry.id },
      include: [
        { model: Collection },
        { model: Metall },
        { model: Type },
        { model: JewHashtag, include: [{ model: Hashtag }] },
        { model: Stock, include: [{ model: Size }] },
        { model: Photo },
        { model: JewStone },
      ],
    });
    res.status(200).json({ jewelry });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/jewelry/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Jewelry.destroy({ where: { id } });
    res.status(200).json(+id);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/types', async (req, res) => {
  try {
    const types = await Type.findAll({ order: [['id', 'ASC']] });
    res.status(200).json({ types });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// Hashtag

router.delete('/hashtag/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await JewHashtag.destroy({ where: { id } });
    res.status(200).json(+id);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/hashtag', async (req, res) => {
  try {
    const { title, id } = req.body;
    let hashtag = await Hashtag.findOne({ where: { title } });
    if (!hashtag) hashtag = await Hashtag.create({ title });
    let jewHashtag = await JewHashtag.create({
      hashtagID: hashtag.id,
      jewelryID: id,
    });
    jewHashtag = await JewHashtag.findOne({
      where: { id: jewHashtag.id },
      include: Hashtag,
    });
    res.status(200).json({ jewHashtag, id, hashtag });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/hashtags', async (req, res) => {
  try {
    const hashtags = await Hashtag.findAll({ order: [['id', 'ASC']] });
    res.status(200).json({ hashtags });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/photo/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Photo.destroy({ where: { id } });
    res.status(200).json({ message: 'ok' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/photo', async (req, res) => {
  try {
    const file = req.files && req.files.photo;
    let img;
    if (file) {
      img = await fileupload(file);
    } else {
      img = '/img/placeholder.png';
    }
    const { jewelryID } = req.body;

    const photo = await Photo.create({
      jewelryID,
      url: img,
    });

    res.status(200).json({ photo });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/sizes', async (req, res) => {
  try {
    const sizes = await Size.findAll({ order: [['id', 'ASC']] });
    res.status(200).json({ sizes });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/stock', async (req, res) => {
  try {
    const stock = req.body;
    const data = await Stock.findOne({
      where: {
        jewelryID: stock.jewelryID,
        sizeID: stock.sizeID,
      },
    });

    if (data) {
      await Stock.update(
        { count: stock.count + data.count },
        { where: { id: data.id } }
      );
    } else {
      await Stock.create(stock);
    }

    const stocks = await Stock.findAll({
      where: { jewelryID: stock.jewelryID },
      include: Size,
      order: [['sizeID', 'ASC']],
    });
    res.status(200).json({ stocks });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/stock/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Stock.destroy({ where: { id } });
    res.status(200).json({ message: 'ok' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// Location
router.get('/locations', async (req, res) => {
  try {
    const locations = await Location.findAll({
      order: [['id', 'ASC']],
    });
    res.status(200).json({ locations });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/location', async (req, res) => {
  try {
    const { city, adress, phone, time, img } = req.body;

    const location = await Location.create({
      city,
      adress,
      phone,
      time,
      img,
    });
    res.status(200).json({ location });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/location/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Location.destroy({ where: { id } });
    res.status(200).json(+id);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/applications', async (req, res) => {
  try {
    const applications = await Application.findAll({
      include: User,
      order: [['id', 'ASC']],
    });
    res.status(200).json({ applications });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/application/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Application.update({ status: 'close' }, { where: { id } });
    res.status(200).json(+id);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/basket', async (req, res) => {
  try {
    if (res.locals.user) {
      let basket = await Order.findOne({
        where: { userID: res.locals.user.id, status: 'basket' },
      });
      if (basket) {
        basket = await OrderItem.findAll({
          where: { orderID: basket.id },
          include: [
            { model: Order },
            {
              model: Jewelry,
              include: [{ model: Stock }, { model: Photo }, { model: Metall }],
            },
            { model: Size },
          ],
          order: [['id', 'ASC']],
        });
        res.status(200).json({ basket });
      } else {
        res.status(400).json({ message: 'Корзина пуста' });
      }
    } else {
      res.status(401).json({ message: 'Юзера нет' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/basket/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { sizeID } = req.body;
    console.log(sizeID, '+++++++');

    const jewelry = await Jewelry.findOne({ where: { id } });

    const basket = await Order.findOne({
      where: { userID: res.locals.user.id, status: 'basket' },
    });
    let basketID;
    if (basket) {
      basketID = basket.id;
      await Order.update(
        { price: basket.price + jewelry.price },
        { where: { id: basketID } }
      );
    } else {
      const order = await Order.create({
        userID: res.locals.user.id,
        status: 'basket',
        price: jewelry.price,
      });
      basketID = order.id;
    }

    const item = await OrderItem.findOne({
      where: { jewelryID: +id, orderID: basketID, sizeID },
    });

    if (item) {
      const c = await OrderItem.update(
        { count: item.count + 1 },
        { where: { id: item.id } }
      );

      if (c) {
        const newBasket = await OrderItem.findAll({
          where: { orderID: basket.id },
          include: [
            { model: Order },
            {
              model: Jewelry,
              include: [{ model: Stock }, { model: Photo }, { model: Metall }],
            },
            { model: Size },
          ],
          order: [['id', 'ASC']],
        });
        res.status(200).json({ newBasket });
      } else {
        res.json({ message: 'Не получилось записать' });
      }
    } else {
      const orderItem = await OrderItem.create({
        jewelryID: +id,
        price: jewelry.price,
        count: 1,
        orderID: basketID,
        sizeID,
      });
      if (orderItem) {
        const newBasket = await OrderItem.findAll({
          where: { orderID: basketID },
          include: [
            { model: Order },
            {
              model: Jewelry,
              include: [{ model: Stock }, { model: Photo }, { model: Metall }],
            },
            { model: Size },
          ],
          order: [['id', 'ASC']],
        });
        res.status(200).json({ newBasket });
      } else {
        res.json({ message: 'Не получилось записать' });
      }
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
