const router = require('express').Router()

const {User} = require('../../db/models');

router.get('/',async (req,res)=>{
  const user = await User.findOne({ where: { id: res.locals.user.id } });
  res.json({ user });
  return;
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, password } = req.body;
    await User.update(
      { name, email, phone, password}, { where: { id: res.locals.user.id }});
      const user = await User.findOne({ where: { id } });
      res.status(200).json({ user })
    }
     catch ({ message }) {
    res.status(500).json({ message });
  }});
module.exports = router;