require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db');
const bodyParser = require('body-parser');

sequelize.sync();
app.use(bodyParser.json());

app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));

app.use('/api/users', require('./controllers/userController'));
app.use('/api/movies', require('./controllers/movieController'));
app.use('/api/scenes', require('./controllers/sceneController'));
<<<<<<< HEAD
// app.use('/api/products', require('./controllers/log'));
=======
app.use('/api/products', require('./controllers/productsController'));
>>>>>>> 5e25069414a0dfa3fb8f1e83e6e1758990c6dbbb
app.use('/api/entries', require('./controllers/entryController'));

app.listen(process.env.PORT, () => {
	console.log(`App is running on ${process.env.PORT}`);
})