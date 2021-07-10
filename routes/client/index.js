const router = require('express').Router();


router.use('/', require('./home.js'));
router.use('/dashboard', require('./dashboard.js'));
router.use('/api', require('../api'));

module.exports = router;
