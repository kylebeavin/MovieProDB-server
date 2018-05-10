const router = require('express').Router();
const sequelize = require('../db');

const Entry = sequelize.import('../models/entryBridge.js');
const Scene = sequelize.import('../models/scene.js');
// const Product = sequelize.import('../models/product.js');

router.get('/:id', (req,res) => {
  Entry
    .findOne({where: {
      id: req.params.id
    }})
    .then(data => res.json(data))
})

router.get('/', (req,res) => {
  Entry
    .findAll({include: [Scene]})
    .then(
      successRetrieval = data => res.json(data),
      failedRetrieval = err => res.send(500, err.message)
    )
})

router.post('/', (req,res) => {
  Entry
    .create({
      scene_id: req.body.entry.scene_id,
      product_id: req.body.entry.product_id,
      entryCreator_id: req.body.entry.entryCreator_id,
      lastEditor_id: req.body.entry.lastEditor_id
    })
    .then(submission => res.json(submission))
})

router.put('/:id', (req,res) => {
  Entry
    .update({
      scene_id: req.body.entry.scene_id,
      product_id: req.body.entry.product_id,
      entryCreator_id: req.body.entry.entryCreator_id,
      lastEditor_id: req.body.entry.lastEditor_id
    },{where: {
      id: req.params.id
    }})
    .then(res.send('Entry updated.'))
})

router.delete('/delete/:id', (req,res) => {
  Entry
    .destroy({where: { id: req.params.id }})
    .then(res.send("Entry deleted."))
})

module.exports = router;