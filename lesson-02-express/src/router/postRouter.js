/** @format */

const { Router } = require('express');
const { getCollection } = require('../db.js');
const postRouter = Router();

const postCollection =  getCollection('posts')


postRouter.get('/', async (req, res) => {

	 const posts = postCollection.find().toArray()
	
	res.json(posts)
});

postRouter.get('/post', async (req, res) => {

	const id = req.query.id

	const post = await postCollection.find({_id: id})

	res.json(post)
})


module.exports = postRouter;
