const router = require('express').Router();


const jewelryApiRouter = require('./api/jewelryApi.routes');
const authApiRouter = require('./api/authApi.routes');
const adminApiRouter = require('./api/adminApiRoutes');
router.use('/api/jewelry', jewelryApiRouter);
router.use('/api/auth', authApiRouter);
router.use('/api/admin', adminApiRouter);

module.exports = router;
