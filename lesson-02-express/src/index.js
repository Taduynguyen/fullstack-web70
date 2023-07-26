/** @format */
const express = require('express');
const authRouter = require('../router/authRouter');
const productRouter = require('../router/productRouter');

const app = express();

app.use(express.json());

app.use('/auth', authRouter);

// localhost:300/auth/login

app.get('/', (req, res) => {
	res.send('Hello');
});

app.get('/profile/:id/:name', (req, res) => {
	const id = req.params.id;
	const name = req.params.name;
	res.json({ data: `ID: ${id}, name: ${name}` });
});

app.get('/product', productRouter);

const PORT = 3000;
app.listen(PORT, (err) => {
	if (!err) {
		console.log(`Server starting on http://localhost:${PORT}`);
	} else {
		console.log(err);
	}
});
