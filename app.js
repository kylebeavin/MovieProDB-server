require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db');
const bodyParser = require('body-parser');

sequelize.sync();
app.use(bodyParser.json());

// app.use(require('./middleware/headers'));
// app.use(require('./middleware/validate-session'));

// app.use('/users', require("./controllers/user"));
// app.use('/movies', require('./controllers/session'));
app.use('/scenes', require('./controllers/sceneController'));
// app.use('/products', require('./controllers/log'));
// app.use('/bridge', require('./controllers/bridge'));

app.listen(process.env.PORT, () => {
	console.log(`App is running on ${process.env.PORT}`);
})