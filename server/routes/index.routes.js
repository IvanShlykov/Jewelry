const router = require('express').Router();
const locationApiRouter = require('./api/locationApi.routes')
const jewelryApiRouter = require('./api/jewelryApi.routes');
const authApiRouter = require('./api/authApi.routes');
const adminApiRouter = require('./api/adminApiRoutes');
const collectionApiRoutes = require('./api/collectionApiRoutes');
const applicationApiRoutes = require('./api/applicationApi.routes');
const userApiRoutes = require('./api/userApiRouter')

const newApiRoutes = require('./api/newApiRoutes');

router.use('/api/jewelry', jewelryApiRouter);
router.use('/api/auth', authApiRouter);
router.use('/api/admin', adminApiRouter);
router.use('/api/collections', collectionApiRoutes);
router.use('/api/application', applicationApiRoutes);
router.use('/api/new', newApiRoutes);
router.use('/api/location', locationApiRouter)
router.use('/api/user', userApiRoutes)

module.exports = router;
