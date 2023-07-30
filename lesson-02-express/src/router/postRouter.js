/** @format */

const { Router } = require('express');
const posts = require('../../data/posts.js');
const checkAPIKey = require('../middlewares/post.js');

const postRouter = Router();
postRouter.use(checkAPIKey)

postRouter.get('/', saveLog,
	(req, res) =>
	{

		const count = req.query.id

		/*
			const system 


			logs: [
				{time, location, username, api},
			]

			fillter


			const logs = user.logs


			logs.push({
				time: Date.now(),
				location
			})

			app.get('/system/statistic', (req, res) => {
				const apiKey = req.headers.apikey

				const user  = users.find(element.apiKey === apiKey)
				logs.filter()

				res.json(
					{user: 'alice', student: 5, teacher: 1, subject: 0},
				)
			})

		*/
		res.json(posts)
	}

);

postRouter.get('/post-detail', (req, res) =>
{
	const id = req.query.id;

	if (!id) {
		res.json({
			message: 'Thiếu id',
		});
	}

	const post = posts.find((element) => element.id === parseInt(id));

	if (!post) {
		res.json({
			message: 'Post not found',
		});
	}

	res.json(post);
});

postRouter.post('/', (req, res) =>
{
	const data = req.body;

	if (!data) {
		res.json({
			message: 'Thiếu data',
		});
	}

	posts.push(data);

	res.json({
		message: 'Bạn đã tạo bài viết thành công!',
		data,
	});
});

module.exports = postRouter;
