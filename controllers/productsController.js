const router = require('express').Router();
const sequelize = require('../db');

const ProductModel = sequelize.import('../models/product.js');

router.get('/:id', (req,res) => {
  ProductModel
    .findOne({where: {
      id: req.params.id
    }})
    .then(data => res.json(data))
})

router.post('/', (req,res) => {
  ProductModel
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
  ProductModel
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
  ProductModel
    .destroy({where: { id: req.params.id }})
    .then(
      deleteSuccess = () => res.send("Product deleted."),
      deleteError = err => res.send(500, err.message)
    )
})

module.exports = router;