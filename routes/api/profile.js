const express = require('express');
const router = express.Router();

/**
 * @name GET api/profile
 * @description profile get request
 * @acess public
 */
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;