const express = require('express');
const { getRouter: getProdutoRouter, getRouter } = require('./produtos/produtoController');
const { get } = require('http');

const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/hello2', (req, res) => {
  res.json({ message: 'Hello, World! 2' });
});

getRouter(app);

app.listen(3000);
