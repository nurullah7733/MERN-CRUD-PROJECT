const productModel = require('../model/productModel');

// Create
exports.createProduct = (req, res) => {
    const reqBody = req.body;
    productModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

// Read
exports.readProduct = (req, res) => {
    const query = {};
    const projection = 'productName productCode img unitPrice qty totalPrice';
    productModel.find(query, projection, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(201).json({ status: 'success', data: data });
        }
    });
};

// Update
exports.updateProduct = (req, res) => {
    const id = req.params.id;
    const reqBody = req.body;
    productModel.updateOne({ _id: id }, reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(201).json({ status: 'success', data: data });
        }
    });
};

// Delete
exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    const query = { _id: id };
    productModel.remove({ _id: id }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(201).json({ status: 'success', data: data });
        }
    });
};

// only actual product

exports.signleProduct = (req, res) => {
    const id = req.params.id;
    productModel.find({ _id: id }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
