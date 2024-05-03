const router = require("express").Router();
const {Jewelry} = require('../../db/models');

router.get("/", async (req, res) => {

  try {
   
    const jewelrys = await Jewelry.findAll();
    console.log(jewelrys,'fhgfffffffffff')
    res.status(200).json({ jewelrys });
  } catch ({ message }) {
    console.log(message,'mmmmeee')
    res.status(500).json({ message });
  }
});
// router.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const jewelry = await Jewelry.findOne({ where: { id } });
//   console.log(jewelry)

//   res.json({ jewelry });
// });

module.exports = router;
