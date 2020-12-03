import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3">
      <a href={`/products/${product._id}`}>
        <Card.Img src={product.image} />
      </a>
      <Card.Body>
        <a href={`/products/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h5">
          <span className="font-weight-bold">${product.price}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
