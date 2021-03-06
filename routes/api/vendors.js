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
        .then(vendor => res.json(vendor))
        .catch(err => res.status(400).json({ novendorsfound: 'No Vendors found'}))
});

// @route GET api/vendor/seller/:_id
// @desc Get vendor by seller
// @access Public
router.get('/seller/:seller', (req, res) => {
    const errors = {};
    Vendor.findOne({ seller: req.params.seller})
        .then(vendor => {
            if(!vendor) {
                errors.novendor = 'No vendor exists';
                res.status(404).json(errors);
            }
            // console.log("Response", vendor)
            res.json(vendor);
        })
        .catch((error) => {
            if(error.response) {
                console.log(error)
            } else {
                console.log("Server error", error)
            }
        });
        // .catch(err => res.status(404).json(errors));
});


// @route PUT api/vendors
// @desc Get vendors route
// @access Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {

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
        currency: req.body.currency
    })
    newVendor.save().then(vendor => res.json(vendor));
});
module.exports = router;
