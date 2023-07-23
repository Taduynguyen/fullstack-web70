/** @format */

const { Router } = require('express');

const productRouter = Router();

productRouter.get('/products', (req, res) => {
	res.send('Products');
});

module.exports = productRouter;
