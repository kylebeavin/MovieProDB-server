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

module.exports = router;