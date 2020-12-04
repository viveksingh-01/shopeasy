const express = require('express');
const products = require('./data/products');
const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(({ _id }) => _id === req.params.id);
  res.status(200).json(product);
});

app.listen(5000, () => {
  console.log('Server running at port 5000');
});
