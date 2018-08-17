const express = require('express');
const router = express.Router();
const passport = require('passport');

const Vendor = require('../models/vendor');

const validateVendorInput = require('../../validation/vendor');

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
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {

    console.log('Getting this far?');

    const { errors, isValid } = validateVendorInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }

    const newVendor = new Vendor({
        seller: req.body.seller,
        paymentmethod: req.body.paymentmethod,
        price: req.body.price,
        lowerlimit: req.body.lowerlimit,
        upperlimit: req.body.upperlimit,
    })
    newVendor.save().then(vendor => res.json(vendor));
});



module.exports = router;
