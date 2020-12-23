import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

interface ProductData {
  _id: string;
  name: string;
  image: string;
  rating: number;
  numReviews: number;
  price: number;
}

interface Props {
  product: ProductData
}

const Product: React.FC<Props> = ({ product }) => {
  return (
    <Card className="my-3 p-3">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
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
