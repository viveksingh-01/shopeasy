import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { fetchProducts } from '../actions/productsAction';
import IProduct from '../types/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(
    (state: { productsList: { loading: boolean; error: string; products: IProduct[] } }) => state.productsList
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <h2>Latest Products</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products?.map(product => (
            <Col key={product._id} sm="12" md="6" lg="4" xl="3">
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
