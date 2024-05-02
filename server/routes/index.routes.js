const router = require('express').Router();


const authApiRouter = require('./api/authApi.routes');


router.use('/api/auth', authApiRouter);
module.exports = router;
