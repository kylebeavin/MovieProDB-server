const router = require('express').Router();
const sequelize = require('../db');

const SceneModel = sequelize.import('../models/scene.js');

router.get('/:id', (req,res) => {
  SceneModel
    .findOne({where: {
      id: req.params.id
    }})
    .then(data => res.json(data))
})

router.post('/', (req,res) => {
  SceneModel
    .create({
      movie_id: req.body.scene.movie_id,
      timestampStart: req.body.scene.timestampStart,
      timestampEnd: req.body.scene.timestampEnd
    })
    .then(submission => res.json(submission))
})

router.put('/:id', (req,res) => {
  SceneModel
    .update({
      movie_id: req.body.scene.movie_id,
      timestampStart: req.body.scene.timestampStart,
      timestampEnd: req.body.scene.timestampEnd
    },{where: {
      id: req.params.id
    }})
    .then(res.send('Updated.'))
})

router.delete('/delete/:id', (req,res) => {
  SceneModel
    .destroy({where: { id: req.params.id }})
    .then(res.send("Scene deleted."))
})

module.exports = router;