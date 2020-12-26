import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import IProductDetail from '../types/ProductDetail';
import { fetchProductDetail } from '../actions/productsAction';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductDetail: React.FC<any> = ({ match }) => {
  const dispatch = useDispatch();
  const { loading, product, error } = useSelector(
    (state: { productDetail: { loading: boolean; product: IProductDetail; error: string } }) => state.productDetail
  );
  useEffect(() => {
    dispatch(fetchProductDetail(match.params.id));
  }, [dispatch, match.params.id]);
  return (
    <>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-chevron-left mr-1"></i> BACK
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
                  <Col style={{ color: product?.countInStock >= 1 ? 'green' : 'red', fontWeight: 'bold' }}>
                    {product?.countInStock >= 1 ? 'In stock' : 'Out of stock'}
                  </Col>
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
      )}
    </>
  );
};

export default ProductDetail;
