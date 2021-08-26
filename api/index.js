const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');

require('dotenv').config();

app.use(express.json());
app.use(cors());

const todoRoute = require('./routes/todo');

app.use('/api/todos', todoRoute);

module.exports = app;

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() =>
		app.listen(PORT, () => {
			console.log('DB Connected!');
			console.log(`Todo api running on port: ${PORT}`);
		})
	)
	.catch((error) => console.log(`${error} did not connect`));
