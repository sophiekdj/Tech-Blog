const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// What's a homeroute????

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;