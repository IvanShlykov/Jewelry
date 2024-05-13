const router = require("express").Router();
const { Jewelry, Photo, Type, Collection, Metall, JewHashtag, Hashtag, Stock, Size, JewStone } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const newJewelrys = await Jewelry.findAll({
      where: { isNew: true },
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
    res.status(200).json({ newJewelrys });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
