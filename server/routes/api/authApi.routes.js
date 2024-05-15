const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const { generateTokens } = require('../../utils/authUtils');
const jwtConfig = require('../../config/jwtConfig');

router.post('/registration', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    if (name && email && phone && password) {
      let user = await User.findOne({ where: { email } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        user = await User.create({
          name,
          email,
          phone,
          password: hash,
        });
        const { accessToken, refreshToken } = generateTokens({
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
            phone: user.phone,
            isAdmin: user.isAdmin,
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
        res.status(201).json({
          message: 'ok',
          user: {id: user.id,
            name: user.name, 
            isAdmin: user.isAdmin,
            email: user.email,
            phone: user.phone},
        });
      } else {
        res.status(400).json({ message: 'такой пользователь уже существует' });
      }
    } else {
      res.status(400).json({ message: 'заполните все поля' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
router.post('/authorization', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
        const { accessToken, refreshToken } = generateTokens({
          user: { name: user.name,
            id: user.id,
            isAdmin: user.isAdmin,
            email: user.email,
            phone: user.phone },
        });
        res.cookie(jwtConfig.access.type, accessToken, {
          httpOnly: true,
          maxAge: jwtConfig.access.expiresIn,
        });

        res.cookie(jwtConfig.refresh.type, refreshToken, {
          httpOnly: true,
          maxAge: jwtConfig.refresh.expiresIn,
        });
        res.status(200).json({
          message: 'ok',
          user: { name: user.name,
            id: user.id,
            isAdmin: user.isAdmin,
            email: user.email,
            phone: user.phone },
        });
      } else {
        res.status(400).json({ message: 'почта или пароль не верный' });
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/checked', async (req, res) => {
  if (res.locals.user) {
    res.status(200).json({
      id: res.locals.user.id,
      name: res.locals.user.name,
      isAdmin: res.locals.user.isAdmin,
      email: res.locals.user.email,
      phone: res.locals.user.phone
    });
  } else {
    res.status(400).json({ message: 'neok' });
  }
});

router.get('/logout', async (req, res) => {
  res.clearCookie(jwtConfig.access.type).clearCookie(jwtConfig.refresh.type);
  res.json({ message: 'success' });
});
module.exports = router;
