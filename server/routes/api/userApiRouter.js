const router = require('express').Router();
const jwtConfig = require('../../config/jwtConfig');
const {
  User,
  Order,
  OrderItem,
  Stock,
  Photo,
  Metall,
  Size,
  Jewelry,
} = require('../../db/models');
const { generateTokens } = require('../../utils/authUtils');

router.get('/orders', async (req, res) => {
  try {
    if (res.locals.user) {
      const orderUser = await Order.findAll({
        where: { userID: res.locals.user.id },
        include: [
          {
            model: OrderItem,
            include: [
              { model: Order },
              {
                model: Jewelry,
                include: [
                  { model: Stock },
                  { model: Photo },
                  { model: Metall },
                ],
              },
              { model: Size },
            ],
          },
        ],
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
    const userEmail = await User.findOne({ where: { email } });
    const userPhone = await User.findOne({ where: { phone } });
    if (userPhone && userPhone.id === res.locals.user.id && !userEmail) {
      await User.update(
        { name, email, phone },
        { where: { id: res.locals.user.id } }
      );
      const user = await User.findOne({ where: { id } });
      res
        .clearCookie(jwtConfig.access.type)
        .clearCookie(jwtConfig.refresh.type);
      const { accessToken, refreshToken } = generateTokens({
        user: {
          name: user.name,
          id: user.id,
          isAdmin: user.isAdmin,
          email: user.email,
          phone: user.phone,
        },
      });
      res.cookie(jwtConfig.access.type, accessToken, {
        httpOnly: true,
        maxAge: jwtConfig.access.expiresIn,
      });

      res.cookie(jwtConfig.refresh.type, refreshToken, {
        httpOnly: true,
        maxAge: jwtConfig.refresh.expiresIn,
      });
      res.status(200).json({ user });
    } else if (userEmail && userEmail.id === res.locals.user.id && !userPhone) {
      await User.update(
        { name, email, phone },
        { where: { id: res.locals.user.id } }
      );
      const user = await User.findOne({ where: { id } });
      res
        .clearCookie(jwtConfig.access.type)
        .clearCookie(jwtConfig.refresh.type);
      const { accessToken, refreshToken } = generateTokens({
        user: {
          name: user.name,
          id: user.id,
          isAdmin: user.isAdmin,
          email: user.email,
          phone: user.phone,
        },
      });
      res.cookie(jwtConfig.access.type, accessToken, {
        httpOnly: true,
        maxAge: jwtConfig.access.expiresIn,
      });

      res.cookie(jwtConfig.refresh.type, refreshToken, {
        httpOnly: true,
        maxAge: jwtConfig.refresh.expiresIn,
      });
      res.status(200).json({ user });
    } else if (!userEmail && !userPhone) {
      await User.update(
        { name, email, phone },
        { where: { id: res.locals.user.id } }
      );
      const user = await User.findOne({ where: { id } });
      res
        .clearCookie(jwtConfig.access.type)
        .clearCookie(jwtConfig.refresh.type);
      const { accessToken, refreshToken } = generateTokens({
        user: {
          name: user.name,
          id: user.id,
          isAdmin: user.isAdmin,
          email: user.email,
          phone: user.phone,
        },
      });
      res.cookie(jwtConfig.access.type, accessToken, {
        httpOnly: true,
        maxAge: jwtConfig.access.expiresIn,
      });

      res.cookie(jwtConfig.refresh.type, refreshToken, {
        httpOnly: true,
        maxAge: jwtConfig.refresh.expiresIn,
      });
      res.status(200).json({ user });
    } else {
      res
        .status(400)
        .json({ message: 'Пользователь с такой почтой и телефоном уже есть' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
module.exports = router;
