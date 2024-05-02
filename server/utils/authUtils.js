// require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

const generateTokens = (payload) => ({
  accessToken: jwt.sign(payload, process.env.TA, { expiresIn: jwtConfig.access.expiresIn }),
  refreshToken: jwt.sign(payload, process.env.TR, { expiresIn: jwtConfig.refresh.expiresIn }),
});

module.exports = { generateTokens };
