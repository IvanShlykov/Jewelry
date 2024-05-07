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
  Stone,
  JewStone,
  Hashtag,
  Size,
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
    });
    res.status(200).json({ jewelrys });
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

module.exports = router;
