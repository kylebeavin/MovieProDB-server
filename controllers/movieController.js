var router = require('express').Router();
var sequelize = require('../db.js');
var Movie = sequelize.import('../models/movie.js');

router.post('/', function(req, res){
	var title = req.body.movie.title;
	var productionCompany = req.body.movie.productionCompany;
	var genre = req.body.movie.genre;

	Movie.create({
		title : title, 
		productionCompany : productionCompany, 
		genre : genre, 
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

router.delete('/', function(req, res){
    var dataID = req.body.Movie.id;
    Movie.destroy({ where: {id: dataID}})
    .then(
        function deleteLogSucess(data){
            res.send("You removed a log!");
        },
        function deleteLogError(err){
            res.send(500, err.message)
        }
    )
})

router.get('/', function(req,res){
    var dataID = req.params.id;
    Movie.findOne({ where: {id: dataID}})
    .then(
        function getSucess(data){
            res.json(data)
        },
        function getError(err){
            res.send(500, err.message)
        }
    )
})

router.put('/', function(req, res){
    var dataid = req.body.movie.id;
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