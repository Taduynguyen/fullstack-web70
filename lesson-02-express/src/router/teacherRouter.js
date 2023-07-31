/** @format */
const { Router } = require('express');
const checkAPIKey = require('../middlewares/post');
const saveLog = require('../utils/saveLog');

const teacherRouter = Router();

teacherRouter.use(checkAPIKey);
teacherRouter.use(saveLog({ api: 'teacher' }));

teacherRouter.get('/', (req, res) => {
	res.send('teachers');
});

module.exports = teacherRouter;
