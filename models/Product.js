const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Product name is required'],
    },
    price: {
        type: Number,
        require: [true, 'Product price is required'],
    },
    slug: {
        type: String,
        require: true,
        unique: true
    },
    brand: {
        type: String
    },
    description: {
        type: String,
        require: [true, 'Product description is required'],
    },
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     require: true,
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);