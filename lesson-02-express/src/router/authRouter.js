/** @format */

const { Router } = require('express');

const authRouter = Router();

authRouter.get('/login', (req, res) => {
	res.json({
		result: 'OK',
	});
});

authRouter.get('/:id', (req, res) => {
	res.json({
		name: '',
		email: '',
	});
});

module.exports = authRouter;
