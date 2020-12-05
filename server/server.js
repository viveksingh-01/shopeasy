import dotenv from 'dotenv';
import express from 'express';
import colors from 'colors';
import connectToDB from './config/db.js';
import products from './data/products.js';

const app = express();

dotenv.config();

connectToDB();

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} at port ${PORT}`.yellow.bold);
});
