const router = require('express').Router();
const sequelize = require('../db');

const EntryModel = sequelize.import('../models/entryBridge.js');

router.get('/:id', (req,res) => {
  EntryModel
    .findOne({where: {
      id: req.params.id
    }})
    .then(data => res.json(data))
})

router.post('/', (req,res) => {
  EntryModel
    .create({
      scene_id: req.body.entry.scene_id,
      product_id: req.body.entry.product_id,
      entryCreator_id: req.body.entry.entryCreator_id,
      lastEditor_id: req.body.entry.lastEditor_id
    })
    .then(submission => res.json(submission))
})

router.put('/:id', (req,res) => {
  EntryModel
    .update({
      scene_id: req.body.entry.scene_id,
      product_id: req.body.entry.product_id,
      entryCreator_id: req.body.entry.entryCreator_id,
      lastEditor_id: req.body.entry.lastEditor_id
    },{where: {
      id: req.params.id
    }})
    .then(res.send('Updated.'))
})

router.delete('/delete/:id', (req,res) => {
  EntryModel
    .destroy({where: { id: req.params.id }})
    .then(res.send("Entry deleted."))
})

module.exports = router;