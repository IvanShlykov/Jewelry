const router = require('express').Router()
const { User, Order, OrderItem, Stock, Photo, Metall, Size, Jewelry} = require('../../db/models')

router.get('/orders', async (req, res) => {
  try {
    console.log('++++++++++');
    if (res.locals.user) {
      const orderUser = await Order.findAll({
        where: { userID: res.locals.user.id, status: 'confirmed' },
        include:[{model:
          OrderItem,
        include:[
          { model: Order },
          {
            model: Jewelry,
            include: [{ model: Stock }, { model: Photo }, { model: Metall }],
          },
          { model: Size },
        ]}]
      });
      if (orderUser) {
        res.status(200).json({ orderUser });
      } else {
        res.status(400).json({ message: 'Корзина пуста' });
      }
    } else {
      res.status(401).json({ message: 'Юзера нет' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/update', async (req, res) => {
  try {
    const { id } = res.locals.user;
    const { name, email, phone } = req.body;
    await User.update(
      { name, email, phone}, { where: { id: res.locals.user.id }});
      const user = await User.findOne({ where: { id } });
      res.status(200).json({ user })
    }
     catch ({ message }) {
    res.status(500).json({ message });
  }});
module.exports = router;