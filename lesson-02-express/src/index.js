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
const {connectToDB} = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/users', authRouter);
app.use('/api/v1/posts', postRouter);

connectToDB(app)
