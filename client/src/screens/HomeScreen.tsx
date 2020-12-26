import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { fetchProducts } from '../actions/productsAction';
import IProduct from '../types/Product';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(
    (state: { productsList: { loading: boolean; error: Error; products: IProduct[] } }) => state.productsList
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <h2>Latest Products</h2>
      <Row>
        {products?.map(product => (
          <Col key={product._id} sm="12" md="6" lg="4" xl="3">
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
