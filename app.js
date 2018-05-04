require('dotenv').config();
require('./db.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// app.use(require('./middleware/headers'));
// app.use(require('./middleware/validate-session'));

// app.use('/users', require("./controllers/user"));
// app.use('/movies', require('./controllers/session'));
// app.use('/scenes', require('./controllers/definition'));
// app.use('/products', require('./controllers/log'));
// app.use('/bridge', require('./controllers/bridge'));

app.listen(process.env.PORT, () => {
	console.log(`app is running on 3000`);
})