/** @format */
const { Router } = require('express');
const checkAPIKey = require('../middlewares/post');
const saveLog = require('../utils/saveLog');

const studentRouter = Router();

studentRouter.use(checkAPIKey);
studentRouter.use(saveLog({ api: 'student' }));

studentRouter.get('/', (req, res) => {
	res.send('studens');
});

module.exports = studentRouter;
