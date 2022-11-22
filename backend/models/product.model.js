const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    stock: { type: Number, required: true },
    date: { type: Date, required: true },
    imageUrl: { type: Array, required: true},
    owner: { type: String, required: true}
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;