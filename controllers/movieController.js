var router = require('express').Router();
var sequelize = require('../db.js');
var Movie = sequelize.import('../models/movie.js');

router.post('/', function(req, res){
	Movie.create({
		title: req.body.movie.title, 
		productionCompany: req.body.movie.productionCompany, 
		genre: req.body.movie.genre, 
	}).then(
		function createSuccess(movie){
			res.json({
			    movie: movie, 
				message: "You created a movie!!"});
		},
		function createError(err){
			res.send(500, err.message)
		}
	);
})

router.delete('/delete/:id', function(req, res){
    Movie.destroy({ where: {id: req.params.id}})
    .then(
        function deleteLogSucess(data){
            res.send("You removed a log!");
        },
        function deleteLogError(err){
            res.send(500, err.message)
        }
    )
})

router.get('/:id', function(req,res){
    Movie.findOne({ where: {id: req.params.id}})
    .then(
        function getSucess(data){
            res.json(data)
        },
        function getError(err){
            res.send(500, err.message)
        }
    )
}) 

router.get('/', (req,res) => {
    Movie
        .findAll()
        .then(
            successRetrieval = data => res.json(data),
            failedRetrieval = err => res.send(500, err.message)
        )
})

router.put('/:id', function(req, res){
    var dataid = req.params.id;
    Movie.update({
        title: req.body.movie.title,
        productionCompany: req.body.movie.productionCompany,
        genre: req.body.movie.genre
    }, {where: {id: dataid}})
    .then(
        function updateSucess(updateddata){
            res.json({
                title: req.body.movie.title,
                productionCompany: req.body.movie.productionCompany,
                genre: req.body.movie.genre
            });
        },
        function updateError(err){
            res.send(500,err.message)
        }
    )
})

module.exports = router;