const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

// shouldnt there be a route for comments?

module.exports = router;
