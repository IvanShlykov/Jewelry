const jwt = require('jsonwebtoken');
const { generateTokens } = require('../utils/authUtils');
const jwtConfig = require('../config/jwtConfig');

function verifyRefreshToken(req, res, next) {
  try {
    const { refresh } = req.cookies;
    const { user } = jwt.verify(refresh, process.env.TR);
    const { accessToken, refreshToken } = generateTokens({ user: { id: user.id, email: user.email, name: user.name } });

    res.locals.user = user;
    res
      .cookie(jwtConfig.refresh.type, refreshToken, { maxAge: jwtConfig.refresh.expiresIn, httpOnly: true })
      .cookie(jwtConfig.access.type, accessToken, { maxAge: jwtConfig.access.expiresIn, httpOnly: true });
    next();
  } catch (error) {
    res
      .clearCookie(jwtConfig.refresh.type)
      .clearCookie(jwtConfig.access.type);
    next();
  }
}
function verifyAccessToken(req, res, next) {
 
  try {
    const { access } = req.cookies;
  
    const { user } = jwt.verify(access, process.env.TA);

    res.locals.user = user;
    next();
  } catch (error) {
    verifyRefreshToken(req, res, next);
  }
}

module.exports = verifyAccessToken;
