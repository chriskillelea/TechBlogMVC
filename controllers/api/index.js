const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
