/** @format */
const express = require('express');
const cors = require('cors');
const authRouter = require('./router/authRouter');
const postRouter = require('./router/postRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/api/v1/posts', postRouter);

app.get('/', (req, res) => {
	res.send('Hello');
});

const PORT = 3001;
app.listen(PORT, (err) => {
	if (!err) {
		console.log(`Server starting on http://localhost:${PORT}`);
	} else {
		console.log(err);
	}
});
