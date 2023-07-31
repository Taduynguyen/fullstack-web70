/** @format */
const { Router } = require('express');
const checkAPIKey = require('../middlewares/post');
const saveLog = require('../utils/saveLog');

const subjectRouter = Router();

subjectRouter.use(checkAPIKey);
subjectRouter.use(saveLog({ api: 'subject' }));

subjectRouter.get('/', (req, res) => {
	res.send('subjects');
});

module.exports = subjectRouter;
