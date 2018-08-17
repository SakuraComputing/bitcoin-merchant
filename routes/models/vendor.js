const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const VendorSchema = new Schema({
    seller: {
        type: String,
        required: true
    },
    paymentmethod: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true
    },
    lowerlimit: {
        type: Number,
        required: true
    },
    upperlimit: {
        type: Number,
        required: true
    }
})
module.exports = Vendor = mongoose.model('vendor', VendorSchema);