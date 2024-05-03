const router = require('express').Router();

const jewelryApiRouter = require('./api/jewelryApi.routes');
const authApiRouter = require('./api/authApi.routes');

router.use('/api/jewelry', jewelryApiRouter);
router.use('/api/auth', authApiRouter);
module.exports = router;
