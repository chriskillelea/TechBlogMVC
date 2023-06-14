const router = require('express').Router();

const homeRoutes = require('/homeroutes');
const apiRoutes = require('/controllers/api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
