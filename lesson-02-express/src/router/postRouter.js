/** @format */

const { Router } = require('express');
const posts = require('../../data/posts.js');

const postRouter = Router();

postRouter.get('/', (req, res) => {
	res.json({
		data: posts,
	});
});

postRouter.get('/post-detail', (req, res) => {
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

postRouter.post('/', (req, res) => {
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
