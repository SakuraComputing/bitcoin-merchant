const express = require('express');
const router = express.Router();

const Vendor = require('../models/vendor');

// @route GET api/vendors
// @desc Get vendors route
// @access Public
router.get('/', (req, res) => {
    Vendor.find()
        .then(vendors => res.json(vendors))
        .catch(err => res.status(400).json({ novendorsfound: 'No Vendors found'}))
});

// @route PUT api/vendors
// @desc Get vendors route
// @access Private



module.exports = router;
