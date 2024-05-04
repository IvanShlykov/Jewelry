const router = require('express').Router();
const multer = require('multer');
const { Collection } = require('../../db/models');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/CollectionIMG/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

router.get('/collection', async (req, res) => {
  try {
    const collections = await Collection.findAll();
    res.status(200).json({ collections });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/collection', upload.single('img'), async (req, res) => {
  try {
    const { name } = req.body;
    const newPhoto = req.file.path.replace('public', '');
    const collection = await Collection.create({ name, photo: newPhoto });
    res.status(200).json({ collection });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/collection/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Collection.destroy({ where: { id } });
    res.status(200).json({ id });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
