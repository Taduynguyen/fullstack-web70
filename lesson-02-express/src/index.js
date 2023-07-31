/** @format */
const express = require('express');
const cors = require('cors');
const authRouter = require('./router/authRouter');
const postRouter = require('./router/postRouter');
const studentRouter = require('./router/studentRouter.js');
const teacherRouter = require('./router/teacherRouter.js');
const subjectRouter = require('./router/subjectRouter');
const logs = require('../data/logs');
const users = require('../data/users');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/users', authRouter);
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/students', studentRouter);
app.use('/api/v1/teachers', teacherRouter);
app.use('/api/v1/subjects', subjectRouter);

app.get('/system/statictis', (req, res) => {
	const data = [];

	/*
		{user: 'alice', student: 5, teacher: 1, subject: 0},
	*/

	users.forEach((item) => {
		let countStudent = logs.filter(
			(element) => element.apiKey === item.apiKey && element.api === 'student'
		);
		let countTeacher = logs.filter(
			(element) => element.apiKey === item.apiKey && element.api === 'teacher'
		);
		let countSubject = logs.filter(
			(element) => element.apiKey === item.apiKey && element.api === 'subject'
		);

		data.push({
			user: item.apiKey,
			student: countStudent.length,
			teacher: countTeacher.length,
			subject: countSubject.length,
		});
	});

	res.json(data);
});

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
