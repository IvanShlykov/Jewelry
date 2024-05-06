const router = require('express').Router();
const { Collection, Jewelry, ColPhoto } = require('../../db/models');
const fileupload = require('../../utils/fileUpload');

router.get('/collection', async (req, res) => {
  try {
    const collections = await Collection.findAll({ order: [['id', 'ASC']] });
    res.status(200).json({ collections });
  } catch ({ message }) {
    res.json({ message });
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
    res.json({ message });
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
    console.log(message);
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
    res.json({ message });
  }
});

// ColPhoto
router.get('/colphotos', async (req, res) => {
  try {
    const colPhotos = await ColPhoto.findAll({
      include: Collection,
      order: [['collectionID', 'ASC']],
    });
    console.log(colPhotos);
    res.status(200).json({ colPhotos });
  } catch ({ message }) {
    res.json({ message });
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
    res.json({ message });
  }
});

router.delete('/colphoto/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await ColPhoto.destroy({ where: { id } });
    res.status(200).json(+id);
  } catch ({ message }) {
    console.log(message);
    res.status(500).json({ message });
  }
});

module.exports = router;
