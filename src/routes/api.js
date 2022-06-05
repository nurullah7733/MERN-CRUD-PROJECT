const router = require('express').Router();
const {
    readProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    signleProduct,
} = require('../controller/productController');

router.get('/all-product', readProduct);
router.post('/add-product', createProduct);
router.post('/update-product/:id', updateProduct);
router.get('/delete-product/:id', deleteProduct);
router.get('/product/:id', signleProduct);

module.exports = router;
