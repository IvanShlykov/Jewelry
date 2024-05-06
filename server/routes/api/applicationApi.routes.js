const router = require('express').Router();
const { Application } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const {
      photo, description, userID
    } = req.body;
    if (description && photo && userID) {
      const book = await Application.create({
        photo, description, status: 'Просчет', userID
      });

      res.json({ message: 'ok', book });
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;