const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const VendorSchema = new Schema({
    seller: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true
    },
    lowerLimit: {
        type: Number,
        required: true
    },
    upperLimit: {
        type: Number,
        required: true
    }
})
module.exports = Vendor = mongoose.model('vendor', VendorSchema);