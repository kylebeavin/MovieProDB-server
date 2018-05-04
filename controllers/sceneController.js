const router = require('express').Router();
const sequelize = require('../db');

const SceneModel = sequelize.import('../models/scene.js');

router.get('/scenes/:id', (req,res) => {
  SceneModel
    .findOne({where: {
      id: req.params.id
    }})
    .then(data => res.json(data))
})

router.post('/scenes', (req,res) => {
  AreaModel
    .create({
      movie_id: req.body.scene.movie_id,
      timestampStart: req.body.scene.timestampStart,
      timestampEnd: req.body.scene.timestampEnd
    })
    .then(submission => res.json(submission))
})

router.put('/scenes/:id', (req,res) => {
  InteractableModel
    .update({
      movie_id: req.body.scene.movie_id,
      timestampStart: req.body.scene.timestampStart,
      timestampEnd: req.body.scene.timestampEnd
    },{where: {
      id: req.params.id
    }})
    .then(res.send('Updated.'))
})

router.delete('/scenes/delete/:id', (req,res) => {
  AreaModel
    .destroy({where: { id: req.params.id }})
    .then(res.send("Scene deleted."))
})

module.exports = router;