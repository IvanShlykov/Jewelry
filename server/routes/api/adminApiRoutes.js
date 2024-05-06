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
      jewelrys.forEach((element) => {
        element.collectionID = 1;
        element.save();
      });
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
    res.json({ message });
  }
});

module.exports = router;
