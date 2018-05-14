const router = require('express').Router();
const sequelize = require('../db');

const Product = sequelize.import('../models/product.js');

router.get('/:id', (req,res) => {
  Product
    .findOne({where: {
      id: req.params.id
    }})
    .then(data => res.json(data))
})

router.get('/', (req,res) => {
  Product
    .findAll()
    .then(
        successRetrieval = data => res.json(data),
        failedRetrieval = err => res.send(500, err.message)
    )
})

router.post('/', (req,res) => {
  Product
    .create({
      productName: req.body.product.productName,
      seller: req.body.product.seller,
      productNumber: req.body.product.productNumber,
      price: req.body.product.price,
      category: req.body.product.category
    })
    .then(
      createSuccess = submission => res.json({
        product: submission,
        message: "Created"
      }),
      createError = err => res.send(500, err.message)
    )
})

router.put('/:id', (req,res) => {
  Product
    .update({
      productName: req.body.product.productName,
      seller: req.body.product.seller,
      productNumber: req.body.product.productNumber,
      price: req.body.product.price,
      category: req.body.product.category
    },{where: {
      id: req.params.id
    }})
    .then(
      updateSuccess = submission => res.json("Product updated."),
      updateError = err => res.send(500, err.message)
    )
})

router.delete('/delete/:id', (req,res) => {
  Product
    .destroy({where: { id: req.params.id }})
    .then(
      deleteSuccess = () => res.send("Product deleted."),
      deleteError = err => res.send(500, err.message)
    )
})

module.exports = router;