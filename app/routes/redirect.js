const router = require('express').Router();
const auth = require('./auth');
const assignment = require('./assignment');
const status = require('./status');

router.use('/users/auth', auth);
router.use('/status', status);
router.use('/assignment', assignment);

module.exports = router;