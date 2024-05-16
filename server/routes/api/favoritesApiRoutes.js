const express = require('express');

const router = express.Router();
const { Favorite, Jewelry, Photo } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const favorites = await Favorite.findAll({
      where: { userID: res.locals.user.id },
      include: [{ model: Jewelry, include: [{ model: Photo }] }],
    });
    res.status(200).json({ favorites });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/', async (req, res) => {
  const { userID, jewelryID } = req.body;

  try {
    let favorite = await Favorite.create({ userID, jewelryID });
    favorite = await Favorite.findOne({
      where: { id: favorite.id },
      include: [{ model: Jewelry, include: [{ model: Photo }] }],
    });

    console.log(favorite, 'FFFFFFFFFFFF');
    res.status(201).json({ favorite });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.delete('/', async (req, res) => {
  const { userID, jewelryID } = req.body;

  try {
    await Favorite.destroy({
      where: {
        userID,
        jewelryID,
      },
    });
    res.status(200).json({ message: 'Favorite removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
