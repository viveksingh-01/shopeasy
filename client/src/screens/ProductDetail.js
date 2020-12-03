import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import products from '../products';

const ProductDetail = ({ match }) => {
  const product = products.find(product => product._id === match.params.id);
  return (
    <>
      <Link to="/" className="btn btn-light">
        BACK
      </Link>
      <Row className="my-3">
        <Col md={5} className="text-center">
          <Image src={product.image} fluid />
        </Col>
        <Col md={4}>
          <h4 style={{ textTransform: 'capitalize', letterSpacing: '1px' }}>{product.name}</h4>
          <p>{product.description}</p>
          <Row>
            <Col md={4}>
              <h3 style={{ letterSpacing: '1px' }}>${product.price}</h3>
            </Col>
            <Col md={8} className="text-right">
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </Col>
          </Row>
        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  );
};

export default ProductDetail;
