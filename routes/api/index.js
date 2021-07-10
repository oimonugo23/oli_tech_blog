const router = require('express').Router();

router.use('/user', require('./users'));
router.use('/post', require('./posts'));
router.use('/comment', require('./comments'));

module.exports = router;