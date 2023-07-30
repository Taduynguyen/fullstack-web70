/** @format */

const { Router } = require('express');
const users = require('../../data/users.js');
const checkAPIKey = require('../middlewares/post.js');

const authRouter = Router();

authRouter.get('/login', (req, res) =>
{
	res.json({
		result: 'OK',
	});
});

authRouter.get('/users-detail', checkAPIKey, (req, res) =>
{
	const id = req.query.id
	if (id) {
		const user = users.find(element => element.id === parseInt(id))

		if (!user) {
			res.send('user not found')
			return
		} else {
			res.json(user)
		}
	} else {

		res.send('Missing user id')
		return
	}
});

module.exports = authRouter;
