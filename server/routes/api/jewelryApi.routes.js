const router = require("express").Router();
const { Jewelry, Photo, Type, Collection, Metall } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const jewelrys = await Jewelry.findAll({
      include: [
        { model: Photo },
        { model: Type },
        { model: Collection },
        { model: Metall },
      ],
    });
    console.log(jewelrys, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    res.status(200).json({ jewelrys });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const jewelry = await Jewelry.findOne({
      where: { id },
      include: [
        { model: Photo },
        { model: Type },
        { model: Collection },
        { model: Metall },
      ],
    });
    if (jewelry) {
      res.json({ jewelry });
    } else {
      res.status(404).json({ message: "Украшение не найдено" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
