import dotenv from 'dotenv';
import express from 'express';
import colors from 'colors';
import connectToDB from './config/db.js';
import productsRoute from './routes/products-route.js';

const app = express();

dotenv.config();

connectToDB();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productsRoute);

app.use('/', (error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code ?? 500);
  res.json({ message: error.message ?? 'An unknown error occurred.' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} at port ${PORT}`.yellow.bold);
});
