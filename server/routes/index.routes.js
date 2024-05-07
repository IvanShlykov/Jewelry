const router = require('express').Router();

const jewelryApiRouter = require('./api/jewelryApi.routes');
const authApiRouter = require('./api/authApi.routes');
const adminApiRouter = require('./api/adminApiRoutes');
const collectionApiRoutes = require('./api/collectionApiRoutes');
const applicationApiRoutes = require('./api/applicationApi.routes');

router.use('/api/jewelry', jewelryApiRouter);
router.use('/api/auth', authApiRouter);
router.use('/api/admin', adminApiRouter);
router.use('/api/collections', collectionApiRoutes);
router.use('/api/application', applicationApiRoutes);

module.exports = router;
