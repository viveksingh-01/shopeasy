import express from 'express';
import HttpError from '../helpers/http-error.model.js';
import Product from '../models/Product.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    return next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    if (!product) {
      const error = new HttpError(`Couldn't find any product with ObjectId: ${req.params.id}`, 404);
      return next(error);
    }
    res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
});

export default router;
