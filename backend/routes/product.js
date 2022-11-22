const router = require('express').Router();
let Product = require('../models/product.model');

const createProduct = (
    name,
    description,
    price,
    stock,
    date,
    imageUrl,
    seller
) => {
    return new Product({
        name,
        description,
        price,
        stock,
        date,
        imageUrl,
        seller
    })
}

router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const newProduct = createProduct(
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.stock,
        req.body.date,
        req.body.imageUrl,
        req.body.seller
    )

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;