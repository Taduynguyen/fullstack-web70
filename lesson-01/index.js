/** @format */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('fajhfsjk');
});

const PORT = 4000;

app.listen(PORT, () => {
	console.log(`Server started at: http://localhost:${PORT}`);
});
