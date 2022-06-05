const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        productName: String,
        productCode: String,
        img: String,
        unitPrice: String,
        qty: String,
        totalPrice: String,
    },
    { versionKey: false, timesStamps: true }
);

const productModel = mongoose.model('products', productSchema);
module.exports = productModel;
