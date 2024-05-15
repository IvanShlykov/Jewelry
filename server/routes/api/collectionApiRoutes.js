const router = require("express").Router();
const {
  Jewelry,
  Photo,
  Type,
  Collection,
  Metall,
  JewHashtag,
  Hashtag,
  Stock,
  Size,
  JewStone,
  ColPhoto,
} = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const collections = await Collection.findAll({
      include: ColPhoto,
      order: [["id", "ASC"]],
    });
    res.status(200).json({ collections });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get("/:collectionID", async (req, res) => {
  console.log(6666666666666666666666666666666666666666)
  try {
    const { collectionID } = req.params;
    const jewelrysSpecificCollection = await Jewelry.findAll({
      where: { collectionID },
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
    console.log(jewelrysSpecificCollection, '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
    if (jewelrysSpecificCollection) {
      res.json({ jewelrysSpecificCollection });
    } else {
      res.status(404).json({ message: "Украшение не найдено" });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
router.get('/metalls', async (req, res) => {
  try {
    const metalls = await Metall.findAll({ order: [['id', 'ASC']] });
    res.status(200).json({ metalls });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});


module.exports = router;
