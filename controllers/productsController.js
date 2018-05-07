const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Product = sequelize.import('../models/product');

router.post('/', (req, res) => {
    let productName = req.body.product.productName;
    let seller = req.body.product.seller;
    let productNumber = req.body.product.productNumber;
    let price = req.body.product.price;
    let category = req.body.product.category;

    Product.create({
        productName: productName,
        seller: seller,
        productNumber: productNumber,
        price = price,
        category = category
    })
        .then(createSuccess = (product) => {
            res.json({
                product: product,
                message: 'created'
            });
        },
            createError = (err) => {
                res.send(500, err.message);
            })
})

module.exports = router;