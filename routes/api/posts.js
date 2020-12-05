const express = require('express');
const router = express.Router();

/**
 * @name GET api/posts
 * @description posts get request
 * @acess public
 */
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;