const router = require('express').Router();
const { Collection } = require('../../db/models');

router.get('/collection', async (req, res) => {
  try {
    const collections = await Collection.findAll();
    res.status(200).json({ collections });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/collection', async (req, res) => {
  try {
    const { name, photo } = req.body;
    const collection = await Collection.create({ name, photo });
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
