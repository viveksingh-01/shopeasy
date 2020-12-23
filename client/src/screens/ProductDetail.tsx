import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

interface Product {
  _id: string;
  name: string;
  image: string;
  rating: number;
  numReviews: number;
  price: number;
  description: string;
  countInStock: number;
}

const ProductDetail: React.FC<any> = ({ match }) => {
  const [product, setProduct] = useState<Product | any>({});
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [match.params.id]);
  return (
    <>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-chevron-left mr-1"></i> BACK
      </Link>
      <Row className="my-3">
        <Col md={5} className="text-center">
          <Image src={product?.image} fluid />
        </Col>
        <Col md={4}>
          <h4 style={{ textTransform: 'capitalize', letterSpacing: '1px' }}>{product?.name}</h4>
          <p>{product?.description}</p>
          <Row>
            <Col sm={4}>
              <h3 style={{ letterSpacing: '1px' }}>${product?.price}</h3>
            </Col>
            <Col sm={8} className="text-right">
              <Rating value={product?.rating} text={`${product?.numReviews} reviews`} />
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col style={{ color: product?.countInStock >= 1 ? 'green' : 'red', fontWeight: 'bold' }}>{product?.countInStock >= 1 ? 'In stock' : 'Out of stock'}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className="btn btn-block" disabled={product?.countInStock === 0}>
                Add to cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetail;
