const express = require('express');
const {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products');

const Product = require('../models/Product');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router.route('/')
    .get(advancedResults(Product), getProducts)
    .post(addProduct);

router.route('/:id')
    .get(getProduct);

module.exports = router;
