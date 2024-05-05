const router = require('express').Router();
const { Collection, ColPhoto } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const collections = await Collection.findAll({ include: ColPhoto, order: [['id', 'ASC']] });
    console.log(collections);
    res.status(200).json({ collections });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
