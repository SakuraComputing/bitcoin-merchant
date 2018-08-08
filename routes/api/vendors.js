const express = require('express');
const router = express.Router();

// @route GET api/vendor/test
// @desc Tests vendors route
// @access Public
router.get('/test', (req, res) =>res.json({
    msg: "Vendors Works"
}));

module.exports = router;
