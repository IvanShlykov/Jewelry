const router = require('express').Router();
const fileupload = require('../../utils/fileUpload');
const { Application } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { description, userID } = req.body;
    const file = req.files && req.files.photo;
    let img;
    if (file) {
      img = await fileupload(file);
    } else {
      img = '/img/placeholder.png';
    }
    const application = await Application.create({
      photo: img,
      description,
      status: 'Просчет',
      userID,
    });
    res.status(200).json({ message: 'ok', application });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
module.exports = router;
