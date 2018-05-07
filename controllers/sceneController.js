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
    .then(
      createSuccess = submission => res.json({
        scene: submission,
        message: "Created"
      }),
      createError = err => res.send(500, err.message)
    )
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
    .then(
      updateSuccess = submission => res.json("Scene updated."),
      updateError = err => res.send(500, err.message)
    )
})

router.delete('/delete/:id', (req,res) => {
  SceneModel
    .destroy({where: { id: req.params.id }})
    .then(
      deleteSuccess = () => res.send("Scene deleted."),
      deleteError = err => res.send(500, err.message)
    )
})

module.exports = router;