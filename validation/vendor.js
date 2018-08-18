const Validator = require('validator');
const isEmpty = require( './is-empty');

module.exports = function validateVendorInput(data) {

    let errors = {};
    
    data.seller = !isEmpty(data.seller) ? data.seller: '';
    data.paymentmethod = !isEmpty(data.paymentmethod) ? data.paymentmethod: '';
    data.price = !isEmpty(data.price) ? data.price: '';
    data.lowerlimit = !isEmpty(data.lowerlimit) ? data.lowerlimit: '';
    data.upperlimit = !isEmpty(data.upperlimit) ? data.upperlimit: '';
    
    if (Validator.isEmpty(data.seller)) {
        errors.seller = 'Seller field is required';
    }
    if (Validator.isEmpty(data.paymentmethod)) {
        errors.paymentmethod = 'Payment Method field is required';
    }
    if (Validator.isEmpty(data.price)) {
        errors.price = 'Price field is required';
    }
    if (Validator.isEmpty(data.lowerlimit)) {
        errors.lowerlimit = 'Lower Limit field is required';
    }
    if (Validator.isEmpty(data.upperlimit)) {
        errors.upperlimit = 'Upper Limit field is required';
    }
    
    return {
    errors,
    isValid: isEmpty(errors)
    };
};