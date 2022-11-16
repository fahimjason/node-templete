const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Product = require('../models/Product');

// @desc      Get all products
// @route     GET /api/v1/auth/products
// @access    Public
exports.getProducts = asyncHandler(async (req, res, next) => {
    // const products = Product.find();

    res.status(200).send(res.advancedResults);
});

// @desc      Get product
// @route     GET /api/v1/auth/product
// @access    Public
exports.getProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(
            new ErrorResponse(`No product with the id of ${req.params.id}`, 404),
        );
    }

    res.status(200).json({
        success: true,
        data: product
    });
});

exports.addProduct = asyncHandler(async (req, res, next) => {
    //
});

exports.updateProduct = asyncHandler(async (req, res, next) => {
    //
});

exports.deleteProduct = asyncHandler(async (req, res, next) => {
    //
});

